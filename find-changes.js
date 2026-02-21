import {readFileSync} from "node:fs"
import eslintConfig from "./index.js"

/**
 * Removex prefixes and eslint related naming from the package name.
 * @param {string} pkg
 */
const packageToRulePrefix = pkg => {
    let name = pkg.replace("eslint-plugin", "")
    name = name.replace("@eslint", "")
    name = name.replace(/^[/-]/g, "").replace(/[/-]$/g, "")
    return name
}

/** Get a list of all reslint rules from all installed packages. */
const getAllRules = async() => {
    const packageJson = JSON.parse(readFileSync("package.json"))
    const eslintPackages = Object.keys(packageJson.dependencies)
        .filter(d => d.includes("eslint") && d !== "eslint")
    const allRules = []
    for (const packageName of eslintPackages) {
        const dep = await import(packageName)
        const resolved = dep?.default?.default ?? dep?.default ?? dep
        if (!resolved?.rules) {
            continue
        }
        const prefix = packageToRulePrefix(packageName)
        const packageRules = Object.keys(resolved.rules).map(ruleName => ({
            "deprecated": !!resolved.rules[ruleName].meta.deprecated,
            "name": `${prefix}/${ruleName}`,
            "package": packageName,
            prefix,
            "rule": ruleName
        }))
        allRules.push(...packageRules)
    }
    const {builtinRules} = await import("eslint/use-at-your-own-risk")
    for (const ruleName of builtinRules.keys()) {
        allRules.push({
            "deprecated": !!builtinRules.get(ruleName).meta.deprecated,
            "name": ruleName,
            "package": "eslint",
            "prefix": "",
            "rule": ruleName
        })
    }
    return allRules
}

const allRules = await getAllRules()
const usedRules = new Set(eslintConfig.flatMap(e => Object.keys(e.rules ?? {})))
for (const rule of allRules) {
    if (!usedRules.has(rule.name) && !rule.deprecated) {
        console.info(`unused: ${rule.name}`)
    }
    if (usedRules.has(rule.name) && rule.deprecated) {
        console.info(`deprecated: ${rule.name}`)
    }
}
