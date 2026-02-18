import json from "@eslint/json"
import stylistic from "@stylistic/eslint-plugin"
import jsdoc from "eslint-plugin-jsdoc"
import jsonc from "eslint-plugin-jsonc"
import n from "eslint-plugin-n"
import packageJson from "eslint-plugin-package-json"
import paddingLines from "eslint-plugin-padding-lines"
import perfectionist from "eslint-plugin-perfectionist"
import unicorn from "eslint-plugin-unicorn"
import {defineConfig} from "eslint/config"
import globals from "globals"

export default defineConfig([{
    "files": ["**/*.{js,jsx,mjs,cjs}"],
    "ignores": [
        "**/*.min.js",
        "**/*.lib.js"
    ],
    "languageOptions": {
        "globals": {
            ...globals.browser,
            ...globals.node
        },
        "sourceType": "module"
    },
    "plugins": {
        "@stylistic": stylistic,
        jsdoc,
        n,
        "padding-lines": paddingLines,
        perfectionist,
        unicorn
    },
    "rules": {
        "@stylistic/array-bracket-newline": [
            "error",
            "consistent"
        ],
        "@stylistic/array-bracket-spacing": "error",
        "@stylistic/array-element-newline": [
            "error",
            "consistent"
        ],
        "@stylistic/arrow-parens": [
            "error",
            "as-needed"
        ],
        "@stylistic/arrow-spacing": "error",
        "@stylistic/block-spacing": "error",
        "@stylistic/brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "@stylistic/comma-dangle": "error",
        "@stylistic/comma-spacing": "error",
        "@stylistic/comma-style": "error",
        "@stylistic/computed-property-spacing": "error",
        "@stylistic/curly-newline": "error",
        "@stylistic/dot-location": ["error", "property"],
        "@stylistic/eol-last": "error",
        // Does not allow a config specific enough to allow foo(<x>,<y>,\n<z>)
        "@stylistic/function-call-argument-newline": "off",
        "@stylistic/function-call-spacing": "error",
        // Does not allow a config specific enough to allow foo(\n<x>,<y>,<z>)
        "@stylistic/function-paren-newline": "off",
        "@stylistic/generator-star-spacing": "error",
        "@stylistic/implicit-arrow-linebreak": "error",
        "@stylistic/indent": [
            "error",
            4
        ],
        // Completely inconsistent formatting, no options to provide context
        "@stylistic/indent-binary-ops": "off",
        "@stylistic/jsx-child-element-spacing": "error",
        "@stylistic/jsx-closing-bracket-location": "error",
        "@stylistic/jsx-closing-tag-location": "error",
        "@stylistic/jsx-curly-brace-presence": "error",
        "@stylistic/jsx-curly-newline": "error",
        "@stylistic/jsx-curly-spacing": "error",
        "@stylistic/jsx-equals-spacing": "error",
        "@stylistic/jsx-first-prop-new-line": "error",
        "@stylistic/jsx-function-call-newline": "error",
        "@stylistic/jsx-indent-props": "error",
        "@stylistic/jsx-max-props-per-line": "error",
        "@stylistic/jsx-newline": "error",
        "@stylistic/jsx-one-expression-per-line": "error",
        "@stylistic/jsx-pascal-case": "error",
        "@stylistic/jsx-quotes": "error",
        "@stylistic/jsx-self-closing-comp": "error",
        "@stylistic/jsx-tag-spacing": "error",
        "@stylistic/jsx-wrap-multilines": "error",
        "@stylistic/key-spacing": "error",
        "@stylistic/keyword-spacing": "error",
        "@stylistic/line-comment-position": "error",
        "@stylistic/linebreak-style": "error",
        "@stylistic/lines-around-comment": [
            "error",
            {
                "beforeBlockComment": false
            }
        ],
        "@stylistic/lines-between-class-members": "error",
        "@stylistic/max-len": [
            "error",
            {
                "ignorePattern": ".*\"data:.*",
                "ignoreRegExpLiterals": true,
                "ignoreUrls": true
            }
        ],
        "@stylistic/max-statements-per-line": "error",
        "@stylistic/member-delimiter-style": "error",
        // Blocked by https://github.com/eslint-stylistic/eslint-stylistic/issues/917
        "@stylistic/multiline-comment-style": "off",
        "@stylistic/multiline-ternary": "error",
        "@stylistic/new-parens": "error",
        // Does not have options to allow chaining as much as fits per line
        "@stylistic/newline-per-chained-call": "off",
        "@stylistic/no-confusing-arrow": "error",
        "@stylistic/no-extra-parens": "error",
        "@stylistic/no-extra-semi": "error",
        "@stylistic/no-floating-decimal": "error",
        // Mixed operators are fine and can be used together safely
        "@stylistic/no-mixed-operators": "off",
        "@stylistic/no-mixed-spaces-and-tabs": "error",
        "@stylistic/no-multi-spaces": "error",
        "@stylistic/no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxBOF": 0,
                "maxEOF": 0
            }
        ],
        "@stylistic/no-tabs": "error",
        "@stylistic/no-trailing-spaces": "error",
        "@stylistic/no-whitespace-before-property": "error",
        "@stylistic/nonblock-statement-body-position": "error",
        "@stylistic/object-curly-newline": "error",
        "@stylistic/object-curly-spacing": "error",
        "@stylistic/object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": true
            }
        ],
        "@stylistic/one-var-declaration-per-line": "error",
        "@stylistic/operator-linebreak": [
            "error",
            "before"
        ],
        "@stylistic/padded-blocks": [
            "error",
            "never"
        ],
        "@stylistic/padding-line-between-statements": "error",
        "@stylistic/quote-props": "error",
        "@stylistic/quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": "always"
            }
        ],
        "@stylistic/rest-spread-spacing": "error",
        "@stylistic/semi": [
            "error",
            "never"
        ],
        "@stylistic/semi-spacing": "error",
        "@stylistic/semi-style": [
            "error",
            "first"
        ],
        "@stylistic/space-before-blocks": "error",
        "@stylistic/space-before-function-paren": [
            "error",
            "never"
        ],
        "@stylistic/space-in-parens": "error",
        "@stylistic/space-infix-ops": "error",
        "@stylistic/space-unary-ops": "error",
        "@stylistic/spaced-comment": "error",
        "@stylistic/switch-colon-spacing": "error",
        "@stylistic/template-curly-spacing": "error",
        "@stylistic/template-tag-spacing": "error",
        "@stylistic/type-annotation-spacing": "error",
        "@stylistic/type-generic-spacing": "error",
        "@stylistic/type-named-tuple-spacing": "error",
        "@stylistic/wrap-iife": "error",
        // Unnecessary, should be reversed as part of redundant brackets
        "@stylistic/wrap-regex": "off",
        "@stylistic/yield-star-spacing": "error",
        "accessor-pairs": [
            "error",
            {
                "getWithoutSet": true
            }
        ],
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "block-scoped-var": "error",
        "camelcase": [
            "error",
            {
                "properties": "never"
            }
        ],
        "capitalized-comments": [
            "error",
            "always",
            {
                "ignoreConsecutiveComments": true
            }
        ],
        "class-methods-use-this": "error",
        // Complexity is not something that is calculated or hard defined
        "complexity": "off",
        // The treatUndefinedAsUnspecified option requires redundant void calls
        "consistent-return": "off",
        "consistent-this": "error",
        // Also triggers (incorrectly?) when calling super in subclasses
        "constructor-super": "off",
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-name-matching": "error",
        "func-names": ["error", "never"],
        "func-style": "error",
        "getter-return": "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "id-denylist": "error",
        // Single character names can be great inside arrow functions like map
        "id-length": "off",
        "id-match": "error",
        "init-declarations": "error",
        "jsdoc/check-access": "error",
        "jsdoc/check-alignment": "error",
        // Examples are not essential if there is a clear description and types
        "jsdoc/check-examples": "off",
        // Plugin has no idea about multiline objects or related indents
        "jsdoc/check-indentation": "off",
        "jsdoc/check-line-alignment": "error",
        "jsdoc/check-param-names": "error",
        "jsdoc/check-property-names": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-template-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/check-values": "error",
        "jsdoc/convert-to-jsdoc-comments": "error",
        "jsdoc/empty-tags": "error",
        "jsdoc/escape-inline-tags": "error",
        "jsdoc/implements-on-classes": "error",
        // Reports false positives if used together with helpers like Partial
        "jsdoc/imports-as-dependencies": "off",
        "jsdoc/informative-docs": "error",
        // Already controlled by the padding-lines plugin
        "jsdoc/lines-before-block": "off",
        "jsdoc/match-description": "error",
        // Good naming cannot be automated, requires manual review
        "jsdoc/match-name": "off",
        "jsdoc/multiline-blocks": "error",
        "jsdoc/no-bad-blocks": "error",
        "jsdoc/no-blank-block-descriptions": "error",
        "jsdoc/no-blank-blocks": "error",
        "jsdoc/no-defaults": "error",
        // No need, default format is quite alright combined with lint rules
        "jsdoc/no-missing-syntax": "off",
        "jsdoc/no-multi-asterisks": "error",
        // So far all doc syntax is allowed
        "jsdoc/no-restricted-syntax": "off",
        // Types are encouraged, therefor there is no need to prevent their use
        "jsdoc/no-types": "off",
        // Does not take node_modules nor custom typedefs into account
        "jsdoc/no-undefined-types": "off",
        // Inline imports are preferred to separate imports for documentation
        "jsdoc/prefer-import-tag": "off",
        "jsdoc/reject-any-type": "error",
        "jsdoc/reject-function-type": "error",
        "jsdoc/require-asterisk-prefix": "error",
        "jsdoc/require-description": "error",
        "jsdoc/require-description-complete-sentence": "error",
        // Examples are not essential if there is a clear description and types
        "jsdoc/require-example": "off",
        // A fileoverview is not required as it seems highly redundant
        "jsdoc/require-file-overview": "off",
        "jsdoc/require-hyphen-before-param-description": "error",
        "jsdoc/require-jsdoc": [
            "warn",
            {
                "enableFixer": false,
                "require": {
                    "ArrowFunctionExpression": true,
                    "ClassDeclaration": true,
                    "ClassExpression": true,
                    "FunctionDeclaration": true,
                    "FunctionExpression": true,
                    "MethodDefinition": true
                }
            }
        ],
        "jsdoc/require-next-description": "error",
        "jsdoc/require-next-type": "error",
        "jsdoc/require-param": "error",
        // Seems like a lot of work for now, but might be enabled in the future
        "jsdoc/require-param-description": "off",
        "jsdoc/require-param-name": "error",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-property": "error",
        "jsdoc/require-property-description": "error",
        "jsdoc/require-property-name": "error",
        "jsdoc/require-property-type": "error",
        "jsdoc/require-rejects": "error",
        // More often than not returns are automatically typed, so no need
        "jsdoc/require-returns": "off",
        "jsdoc/require-returns-check": "error",
        // Seems like a lot of work for now, but might be enabled in the future
        "jsdoc/require-returns-description": "off",
        "jsdoc/require-returns-type": "error",
        // There are no required tags that aren't covered by other rules
        "jsdoc/require-tags": "off",
        "jsdoc/require-template": "error",
        "jsdoc/require-template-description": "error",
        "jsdoc/require-throws": "error",
        "jsdoc/require-throws-description": "error",
        "jsdoc/require-throws-type": "error",
        "jsdoc/require-yields": "error",
        "jsdoc/require-yields-check": "error",
        "jsdoc/require-yields-description": "error",
        "jsdoc/require-yields-type": "error",
        "jsdoc/sort-tags": "error",
        "jsdoc/tag-lines": "error",
        // There shouldn't be any markdown nor html in the description at all
        "jsdoc/text-escaping": "off",
        "jsdoc/ts-method-signature-style": "error",
        "jsdoc/ts-no-empty-object-type": "error",
        "jsdoc/ts-no-unnecessary-template-expression": "error",
        "jsdoc/ts-prefer-function-type": "error",
        // Still experimental and unionSpacing does not allow optional newlines
        "jsdoc/type-formatting": "off",
        "jsdoc/valid-types": "error",
        "logical-assignment-operators": "error",
        // More classes the better if you need them, no limit required
        "max-classes-per-file": "off",
        "max-depth": "error",
        // Seems like a lot of work for now, but might be enabled in the future
        "max-lines": "off",
        // Seems like a lot of work for now, but might be enabled in the future
        "max-lines-per-function": "off",
        "max-nested-callbacks": "error",
        "max-params": [
            "error",
            5
        ],
        // Complexity is not something that is calculated or hard defined
        "max-statements": "off",
        // Too many false positives, would be nice to have, but annoying.
        "n/callback-return": "off",
        "n/exports-style": "error",
        "n/file-extension-in-import": "error",
        "n/global-require": "error",
        "n/handle-callback-err": "error",
        "n/hashbang": "error",
        // Seems not very useful to enforce this pattern for now, ignoring.
        "n/no-callback-literal": "off",
        "n/no-deprecated-api": "error",
        "n/no-exports-assign": "error",
        "n/no-extraneous-import": "error",
        "n/no-extraneous-require": "error",
        "n/no-missing-import": "error",
        "n/no-missing-require": "error",
        "n/no-mixed-requires": "error",
        "n/no-new-require": "error",
        "n/no-path-concat": "error",
        // The ENV can be a good way to allow config of programs, so allow it.
        "n/no-process-env": "off",
        // Exiting with process.exit is fine for now, ignoring.
        "n/no-process-exit": "off",
        "n/no-restricted-import": "error",
        "n/no-restricted-require": "error",
        // Sync methods are fine for now, ignoring.
        "n/no-sync": "off",
        // Compatibility is already checked for with rules, so not a concern.
        "n/no-top-level-await": "off",
        "n/no-unpublished-bin": "error",
        // Unpublished imports are good, as packages on Github are also fine.
        "n/no-unpublished-import": "off",
        // Unpublished requires are good, as packages on Github are also fine.
        "n/no-unpublished-require": "off",
        "n/no-unsupported-features/es-builtins": "error",
        "n/no-unsupported-features/es-syntax": "error",
        "n/no-unsupported-features/node-builtins": [
            "error",
            {
                "allowExperimental": true
            }
        ],
        "n/prefer-global/buffer": "error",
        "n/prefer-global/console": "error",
        "n/prefer-global/crypto": "error",
        "n/prefer-global/process": "error",
        "n/prefer-global/text-decoder": "error",
        "n/prefer-global/text-encoder": "error",
        "n/prefer-global/timers": "error",
        "n/prefer-global/url": "error",
        "n/prefer-global/url-search-params": "error",
        "n/prefer-node-protocol": "error",
        "n/prefer-promises/dns": "error",
        // Promises are great, but not yet for the fs module, maybe later.
        "n/prefer-promises/fs": "off",
        "n/process-exit-as-throw": "error",
        "new-cap": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        // There are uses when awaiting the steps is different than Promise.all
        "no-await-in-loop": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "error",
                    "info"
                ]
            }
        ],
        "no-const-assign": "error",
        "no-constant-binary-expression": "error",
        "no-constant-condition": "error",
        // There are cases where this is desired, and it is rarely accidental
        "no-constructor-return": "off",
        // There are plenty of legitimate cases of continue over a few ifs
        "no-continue": "off",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": [
            "error",
            {
                "allowElseIf": false
            }
        ],
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-empty-static-block": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": [
            "error",
            {
                "boolean": false
            }
        ],
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-inline-comments": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        // This can be good together with early returns or unordered loops
        "no-loop-func": "off",
        "no-loss-of-precision": "error",
        // Overly annoying with many many false positives
        "no-magic-numbers": "off",
        "no-misleading-character-class": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        // Already part of the unicorn plugin.
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        // False positives for RegExp calls, so leaving disabled.
        "no-new": "off",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-obj-calls": "error",
        "no-object-constructor": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "error",
        "no-restricted-globals": [
            "error",
            "location"
        ],
        "no-restricted-imports": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": [
            "error",
            {
                "message": "Switch cases are not allowed, please use if's.",
                "selector": "SwitchCase"
            },
            {
                "message": "Switch cases are not allowed, please use if's.",
                "selector": "SwitchStatement"
            },
            {
                "message": "Legacy functions not allowed, use arrow functions.",
                "selector": "FunctionDeclaration"
            },
            {
                "message": "Legacy functions not allowed, use arrow functions.",
                "selector": ":not(MethodDefinition) > FunctionExpression"
            }
        ],
        "no-return-assign": "error",
        // False positives when trying to detect/filter these in unsafe input
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-setter-return": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-unassigned-vars": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        // Both no-global-assign and no-shadow-restricted-names prevent misuse
        "no-undefined": "off",
        "no-underscore-dangle": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": [
            "warn",
            {
                "ignoreRestSiblings": true
            }
        ],
        "no-use-before-define": "warn",
        // Known limitations are annoying and this is rarely a problem anyway
        "no-useless-assignment": "off",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": [
            "error",
            {
                "allowAsStatement": true
            }
        ],
        "no-warning-comments": "error",
        "no-with": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "operator-assignment": "error",
        "padding-lines/objects": "error",
        "padding-lines/statements": [
            "error",
            {
                "blankLine": "never",
                "next": "*",
                "prev": "*"
            },
            {
                "blankLine": "always",
                "next": [
                    "var",
                    "let",
                    "const"
                ],
                "prev": "directive"
            },
            {
                "blankLine": "always",
                "next": [
                    "var",
                    "let",
                    "const"
                ],
                "prev": "arrow"
            },
            {
                "blankLine": "always",
                "next": "arrow",
                "prev": "arrow"
            },
            {
                "blankLine": "always",
                "next": "arrow",
                "prev": [
                    "var",
                    "let",
                    "const"
                ]
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": [
                    "import",
                    "cjs-import"
                ]
            },
            {
                "blankLine": "always",
                "next": [
                    "export",
                    "cjs-export"
                ],
                "prev": "*"
            },
            {
                "blankLine": "always",
                "next": [
                    "export",
                    "cjs-export"
                ],
                "prev": [
                    "export",
                    "cjs-export"
                ]
            }
        ],
        "perfectionist/sort-array-includes": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-classes": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-decorators": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-enums": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-export-attributes": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-exports": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-heritage-clauses": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-import-attributes": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-imports": [
            "error",
            {
                "newlinesBetween": 0,
                "type": "natural"
            }
        ],
        "perfectionist/sort-interfaces": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-intersection-types": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-jsx-props": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-maps": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-modules": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-named-exports": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-named-imports": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-object-types": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-objects": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-sets": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-switch-case": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-union-types": [
            "error",
            {
                "type": "natural"
            }
        ],
        "perfectionist/sort-variable-declarations": [
            "error",
            {
                "type": "natural"
            }
        ],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-exponentiation-operator": "error",
        // Indexes are fine, no need
        "prefer-named-capture-group": "off",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "preserve-caught-error": "error",
        "radix": "error",
        // Seems like a lot of work for now, but might be enabled in the future
        "require-atomic-updates": "off",
        "require-await": "error",
        // Changes the behavior of \w, so isn't safe yet is also rarely needed
        "require-unicode-regexp": "off",
        "require-yield": "error",
        // Handled by perfectionist
        "sort-imports": "off",
        // Handled by perfectionist
        "sort-keys": "off",
        "sort-vars": "error",
        "strict": [
            "error",
            "global"
        ],
        "symbol-description": "error",
        "unicode-bom": "error",
        "unicorn/better-regex": "error",
        "unicorn/catch-error-name": "error",
        "unicorn/consistent-assert": "error",
        "unicorn/consistent-date-clone": "error",
        "unicorn/consistent-destructuring": "error",
        "unicorn/consistent-empty-array-spread": "error",
        "unicorn/consistent-existence-index-check": "error",
        "unicorn/consistent-function-scoping": "error",
        "unicorn/custom-error-definition": "error",
        "unicorn/empty-brace-spaces": "error",
        "unicorn/error-message": "error",
        "unicorn/escape-case": ["error", "lowercase"],
        "unicorn/expiring-todo-comments": "error",
        "unicorn/explicit-length-check": "error",
        "unicorn/filename-case": "error",
        // It seems better to decide case by case which import style is better.
        "unicorn/import-style": "off",
        "unicorn/isolated-functions": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-accessor-recursion": "error",
        "unicorn/no-anonymous-default-export": "error",
        // This can be guarded for perfectly fine with types.
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-array-for-each": "error",
        "unicorn/no-array-method-this-argument": "error",
        // Reduce might be complex in some cases, but it's usually miles faster.
        "unicorn/no-array-reduce": "off",
        "unicorn/no-array-reverse": "error",
        "unicorn/no-array-sort": "error",
        "unicorn/no-await-expression-member": "error",
        "unicorn/no-await-in-promise-methods": "error",
        "unicorn/no-console-spaces": "error",
        "unicorn/no-document-cookie": "error",
        "unicorn/no-empty-file": "error",
        "unicorn/no-for-loop": "error",
        "unicorn/no-hex-escape": "error",
        "unicorn/no-immediate-mutation": "error",
        "unicorn/no-instanceof-builtins": "error",
        "unicorn/no-invalid-fetch-options": "error",
        "unicorn/no-invalid-remove-event-listener": "error",
        // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1639
        "unicorn/no-keyword-prefix": "off",
        "unicorn/no-lonely-if": "error",
        "unicorn/no-magic-array-flat-depth": "error",
        "unicorn/no-named-default": "error",
        "unicorn/no-negated-condition": "error",
        "unicorn/no-negation-in-equality-check": "error",
        // Already part of core eslint.
        "unicorn/no-nested-ternary": "off",
        "unicorn/no-new-array": "error",
        "unicorn/no-new-buffer": "error",
        // Null/undefined should do the same, but no need to ban either for now.
        "unicorn/no-null": "off",
        "unicorn/no-object-as-default-parameter": "error",
        // Exiting with process.exit is fine for now, ignoring.
        "unicorn/no-process-exit": "off",
        "unicorn/no-single-promise-in-promise-methods": "error",
        "unicorn/no-static-only-class": "error",
        "unicorn/no-thenable": "error",
        "unicorn/no-this-assignment": "error",
        "unicorn/no-typeof-undefined": "error",
        "unicorn/no-unnecessary-array-flat-depth": "error",
        "unicorn/no-unnecessary-array-splice-count": "error",
        "unicorn/no-unnecessary-await": "error",
        "unicorn/no-unnecessary-polyfills": "error",
        "unicorn/no-unnecessary-slice-end": "error",
        // While readability counts, this syntax does not need a flat out ban.
        "unicorn/no-unreadable-array-destructuring": "off",
        "unicorn/no-unreadable-iife": "error",
        "unicorn/no-unused-properties": "error",
        "unicorn/no-useless-collection-argument": "error",
        "unicorn/no-useless-error-capture-stack-trace": "error",
        "unicorn/no-useless-fallback-in-spread": "error",
        "unicorn/no-useless-length-check": "error",
        "unicorn/no-useless-promise-resolve-reject": "error",
        "unicorn/no-useless-spread": "error",
        "unicorn/no-useless-switch-case": "error",
        "unicorn/no-useless-undefined": "error",
        "unicorn/no-zero-fractions": "error",
        "unicorn/number-literal-case": "error",
        // This does very little for readability and can be confusing to some.
        "unicorn/numeric-separators-style": "off",
        "unicorn/prefer-add-event-listener": "error",
        "unicorn/prefer-array-find": "error",
        "unicorn/prefer-array-flat": "error",
        "unicorn/prefer-array-flat-map": "error",
        "unicorn/prefer-array-index-of": "error",
        "unicorn/prefer-array-some": "error",
        "unicorn/prefer-at": "error",
        "unicorn/prefer-bigint-literals": "error",
        "unicorn/prefer-blob-reading-methods": "error",
        "unicorn/prefer-class-fields": "error",
        "unicorn/prefer-classlist-toggle": "error",
        "unicorn/prefer-code-point": "error",
        "unicorn/prefer-date-now": "error",
        "unicorn/prefer-default-parameters": "error",
        "unicorn/prefer-dom-node-append": "error",
        "unicorn/prefer-dom-node-dataset": "error",
        "unicorn/prefer-dom-node-remove": "error",
        "unicorn/prefer-dom-node-text-content": "error",
        // Seems fine to keep using the Node.js version over this for now.
        "unicorn/prefer-event-target": "off",
        "unicorn/prefer-export-from": "error",
        // Doesn't take into account all cases where replacement isn't possible.
        "unicorn/prefer-global-this": "off",
        "unicorn/prefer-import-meta-properties": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-json-parse-buffer": "error",
        "unicorn/prefer-keyboard-event-key": "error",
        "unicorn/prefer-logical-operator-over-ternary": "error",
        "unicorn/prefer-math-min-max": "error",
        "unicorn/prefer-math-trunc": "error",
        "unicorn/prefer-modern-dom-apis": "error",
        "unicorn/prefer-modern-math-apis": "error",
        "unicorn/prefer-module": "error",
        "unicorn/prefer-native-coercion-functions": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-number-properties": "error",
        "unicorn/prefer-object-from-entries": "error",
        "unicorn/prefer-optional-catch-binding": "error",
        "unicorn/prefer-prototype-methods": "error",
        // Query selector is much slower than any other selector.
        "unicorn/prefer-query-selector": "off",
        "unicorn/prefer-reflect-apply": "error",
        "unicorn/prefer-regexp-test": "error",
        "unicorn/prefer-response-static-json": "error",
        "unicorn/prefer-set-has": "error",
        "unicorn/prefer-set-size": "error",
        "unicorn/prefer-single-call": "error",
        "unicorn/prefer-spread": "error",
        "unicorn/prefer-string-raw": "error",
        // Also wants to use replaceAll with regex, confusing and redundant.
        "unicorn/prefer-string-replace-all": "off",
        "unicorn/prefer-string-slice": "error",
        "unicorn/prefer-string-starts-ends-with": "error",
        "unicorn/prefer-string-trim-start-end": "error",
        // JSON.parse(JSON.stringify()) is much faster than structuredClone.
        "unicorn/prefer-structured-clone": "off",
        // Switches are not readable, end of story.
        "unicorn/prefer-switch": "off",
        // Leaving it off for now as ternaries are disabled.
        "unicorn/prefer-ternary": "off",
        "unicorn/prefer-top-level-await": "error",
        "unicorn/prefer-type-error": "error",
        // A lot of common abbreviations are also blocked with this on.
        "unicorn/prevent-abbreviations": "off",
        "unicorn/relative-url-style": "error",
        "unicorn/require-array-join-separator": "error",
        "unicorn/require-module-attributes": "error",
        "unicorn/require-module-specifiers": "error",
        "unicorn/require-number-to-fixed-digits-argument": "error",
        "unicorn/require-post-message-target-origin": "error",
        "unicorn/string-content": [
            "error",
            {
                "patterns": {
                    // eslint-disable-next-line unicorn/string-content
                    "–": "-", "‘": "'", "’": "'"
                }
            }
        ],
        "unicorn/switch-case-braces": "error",
        "unicorn/template-indent": "error",
        "unicorn/text-encoding-identifier-case": "error",
        "unicorn/throw-new-error": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "vars-on-top": "error",
        "yoda": "error"
    },
    "settings": {
        "jsdoc": {
            "mode": "typescript"
        }
    }
},
{
    "files": ["**/*.json"],
    "ignores": [
        "**/package-lock.json",
        "**/package.json"
    ],
    "language": "json/json",
    "plugins": {
        json,
        jsonc
    },
    "rules": {
        "json/no-duplicate-keys": "error",
        "json/no-empty-keys": "error",
        "json/no-unnormalized-keys": "error",
        "json/no-unsafe-values": "error",
        // Also implemented by jsonc
        "json/sort-keys": "off",
        "json/top-level-interop": "error",
        "jsonc/array-bracket-newline": "error",
        "jsonc/array-bracket-spacing": "error",
        "jsonc/array-element-newline": "error",
        "jsonc/auto": "error",
        "jsonc/comma-dangle": "error",
        "jsonc/comma-style": "error",
        "jsonc/indent": "error",
        "jsonc/key-name-casing": "error",
        "jsonc/key-spacing": "error",
        "jsonc/no-bigint-literals": "error",
        "jsonc/no-binary-expression": "error",
        "jsonc/no-binary-numeric-literals": "error",
        "jsonc/no-comments": "error",
        "jsonc/no-dupe-keys": "error",
        "jsonc/no-escape-sequence-in-identifier": "error",
        "jsonc/no-floating-decimal": "error",
        "jsonc/no-hexadecimal-numeric-literals": "error",
        "jsonc/no-infinity": "error",
        "jsonc/no-irregular-whitespace": "error",
        "jsonc/no-multi-str": "error",
        "jsonc/no-nan": "error",
        "jsonc/no-number-props": "error",
        "jsonc/no-numeric-separators": "error",
        "jsonc/no-octal": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/no-octal-numeric-literals": "error",
        "jsonc/no-parenthesized": "error",
        "jsonc/no-plus-sign": "error",
        "jsonc/no-regexp-literals": "error",
        "jsonc/no-sparse-arrays": "error",
        "jsonc/no-template-literals": "error",
        "jsonc/no-undefined-value": "error",
        "jsonc/no-unicode-codepoint-escapes": "error",
        "jsonc/no-useless-escape": "error",
        "jsonc/object-curly-newline": "error",
        "jsonc/object-curly-spacing": "error",
        "jsonc/object-property-newline": "error",
        "jsonc/quote-props": "error",
        "jsonc/quotes": "error",
        "jsonc/sort-array-values": [
            "error",
            {
                "order": {"type": "asc"},
                "pathPattern": ".*"
            }
        ],
        "jsonc/sort-keys": "error",
        "jsonc/space-unary-ops": "error",
        "jsonc/valid-json-number": "error",
        "jsonc/vue-custom-block/no-parsing-error": "error"
    }
},
{
    "files": ["**/package.json"],
    "languageOptions": {
        "parser": packageJson.configs.recommended.languageOptions.parser
    },
    "plugins": {
        jsonc,
        "package-json": packageJson
    },
    "rules": {
        "jsonc/indent": "error",
        "package-json/bin-name-casing": "error",
        "package-json/exports-subpaths-style": [
            "error",
            {
                "prefer": "implicit"
            }
        ],
        "package-json/no-empty-fields": "error",
        "package-json/no-redundant-files": "error",
        "package-json/no-redundant-publishConfig": "error",
        "package-json/order-properties": "error",
        // Shorthand isn't good, but plain urls are reported as such by this
        "package-json/repository-shorthand": "off",
        "package-json/require-attribution": "error",
        "package-json/require-author": "error",
        "package-json/require-bugs": "error",
        // These should continue to be optional, only add when actually needed.
        "package-json/require-bundleDependencies": "off",
        // These should continue to be optional, only add when actually needed.
        "package-json/require-dependencies": "off",
        "package-json/require-description": "error",
        // These should continue to be optional, only add when actually needed.
        "package-json/require-devDependencies": "off",
        "package-json/require-engines": "error",
        "package-json/require-exports": "error",
        // These should continue to be optional, only add when actually needed.
        "package-json/require-files": "off",
        "package-json/require-homepage": "error",
        "package-json/require-keywords": "error",
        "package-json/require-license": "error",
        "package-json/require-name": "error",
        // These should continue to be optional, only add when actually needed.
        "package-json/require-optionalDependencies": "off",
        // These should continue to be optional, only add when actually needed.
        "package-json/require-peerDependencies": "off",
        "package-json/require-repository": "error",
        "package-json/require-scripts": "error",
        // Not part of the npm docs, leaving it disabled for now.
        "package-json/require-sideEffects": "off",
        "package-json/require-type": "error",
        // Not part of the npm docs, leaving it disabled for now.
        "package-json/require-types": "off",
        "package-json/require-version": "error",
        "package-json/restrict-dependency-ranges": "error",
        "package-json/restrict-private-properties": "error",
        "package-json/scripts-name-casing": "error",
        "package-json/sort-collections": "error",
        "package-json/specify-peers-locally": "error",
        "package-json/unique-dependencies": "error",
        "package-json/valid-author": "error",
        "package-json/valid-bin": "error",
        "package-json/valid-bundleDependencies": "error",
        "package-json/valid-config": "error",
        "package-json/valid-contributors": "error",
        "package-json/valid-cpu": "error",
        "package-json/valid-dependencies": "error",
        "package-json/valid-description": "error",
        "package-json/valid-devDependencies": "error",
        "package-json/valid-directories": "error",
        "package-json/valid-engines": "error",
        "package-json/valid-exports": "error",
        "package-json/valid-files": "error",
        "package-json/valid-homepage": "error",
        "package-json/valid-keywords": "error",
        "package-json/valid-license": "error",
        "package-json/valid-main": "error",
        "package-json/valid-man": "error",
        "package-json/valid-module": "error",
        "package-json/valid-name": "error",
        "package-json/valid-optionalDependencies": "error",
        "package-json/valid-os": "error",
        "package-json/valid-peerDependencies": "error",
        "package-json/valid-private": "error",
        "package-json/valid-publishConfig": "error",
        "package-json/valid-repository": "error",
        "package-json/valid-repository-directory": "error",
        "package-json/valid-scripts": "error",
        "package-json/valid-sideEffects": "error",
        "package-json/valid-type": "error",
        "package-json/valid-version": "error",
        "package-json/valid-workspaces": "error"
    }
}])
