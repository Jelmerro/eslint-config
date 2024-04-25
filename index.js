"use strict"

const globals = require("globals")
const jsdoc = require("eslint-plugin-jsdoc")
const paddingLines = require("eslint-plugin-padding-lines")
const sortKeys = require("eslint-plugin-sort-keys")
const stylistic = require("@stylistic/eslint-plugin")

module.exports = {
    "ignores": [
        "**/*.min.js",
        "**/*.lib.js"
    ],
    "languageOptions": {
        "globals": {
            ...globals.browser,
            ...globals.node
        },
        "sourceType": "commonjs"
    },
    "plugins": {
        "@stylistic": stylistic,
        jsdoc,
        "padding-lines": paddingLines,
        "sort-keys": sortKeys
    },
    "rules": {
        "@stylistic/array-bracket-newline": "error",
        "@stylistic/array-bracket-spacing": "error",
        "@stylistic/array-element-newline": "error",
        "@stylistic/arrow-parens": "error",
        "@stylistic/arrow-spacing": "error",
        "@stylistic/block-spacing": "error",
        "@stylistic/brace-style": "error",
        "@stylistic/comma-dangle": "error",
        "@stylistic/comma-spacing": "error",
        "@stylistic/comma-style": "error",
        "@stylistic/computed-property-spacing": "error",
        "@stylistic/dot-location": "error",
        "@stylistic/eol-last": "error",
        "@stylistic/function-call-argument-newline": "error",
        "@stylistic/function-call-spacing": "error",
        "@stylistic/function-paren-newline": "error",
        "@stylistic/generator-star-spacing": "error",
        "@stylistic/implicit-arrow-linebreak": "error",
        "@stylistic/indent": "error",
        "@stylistic/indent-binary-ops": "error",
        "@stylistic/jsx-child-element-spacing": "error",
        "@stylistic/jsx-closing-bracket-location": "error",
        "@stylistic/jsx-closing-tag-location": "error",
        "@stylistic/jsx-curly-brace-presence": "error",
        "@stylistic/jsx-curly-newline": "error",
        "@stylistic/jsx-curly-spacing": "error",
        "@stylistic/jsx-equals-spacing": "error",
        "@stylistic/jsx-first-prop-new-line": "error",
        "@stylistic/jsx-indent": "error",
        "@stylistic/jsx-indent-props": "error",
        "@stylistic/jsx-max-props-per-line": "error",
        "@stylistic/jsx-newline": "error",
        "@stylistic/jsx-one-expression-per-line": "error",
        "@stylistic/jsx-pascal-case": "error",
        "@stylistic/jsx-props-no-multi-spaces": "error",
        "@stylistic/jsx-quotes": "error",
        "@stylistic/jsx-self-closing-comp": "error",
        "@stylistic/jsx-sort-props": "error",
        "@stylistic/jsx-tag-spacing": "error",
        "@stylistic/jsx-wrap-multilines": "error",
        "@stylistic/key-spacing": "error",
        "@stylistic/keyword-spacing": "error",
        "@stylistic/linebreak-style": "error",
        "@stylistic/lines-around-comment": "error",
        "@stylistic/lines-between-class-members": "error",
        "@stylistic/max-len": "error",
        "@stylistic/max-statements-per-line": "error",
        "@stylistic/member-delimiter-style": "error",
        "@stylistic/multiline-ternary": "error",
        "@stylistic/new-parens": "error",
        "@stylistic/newline-per-chained-call": "error",
        "@stylistic/no-confusing-arrow": "error",
        "@stylistic/no-extra-parens": "error",
        "@stylistic/no-extra-semi": "error",
        "@stylistic/no-floating-decimal": "error",
        "@stylistic/no-mixed-operators": "error",
        "@stylistic/no-mixed-spaces-and-tabs": "error",
        "@stylistic/no-multi-spaces": "error",
        "@stylistic/no-multiple-empty-lines": "error",
        "@stylistic/no-tabs": "error",
        "@stylistic/no-trailing-spaces": "error",
        "@stylistic/no-whitespace-before-property": "error",
        "@stylistic/nonblock-statement-body-position": "error",
        "@stylistic/object-curly-newline": "error",
        "@stylistic/object-curly-spacing": "error",
        "@stylistic/object-property-newline": "error",
        "@stylistic/one-var-declaration-per-line": "error",
        "@stylistic/operator-linebreak": "error",
        "@stylistic/padded-blocks": "error",
        "@stylistic/padding-line-between-statements": "error",
        "@stylistic/quote-props": "error",
        "@stylistic/quotes": "error",
        "@stylistic/rest-spread-spacing": "error",
        "@stylistic/semi": "error",
        "@stylistic/semi-spacing": "error",
        "@stylistic/semi-style": "error",
        "@stylistic/space-before-blocks": "error",
        "@stylistic/space-before-function-paren": "error",
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
        "@stylistic/wrap-regex": "error",
        "@stylistic/yield-star-spacing": "error",
        "accessor-pairs": [
            "error",
            {
                "getWithoutSet": true
            }
        ],
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "arrow-body-style": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
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
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "complexity": "off",
        "computed-property-spacing": "error",
        "consistent-return": "off",
        "consistent-this": "error",
        "constructor-super": "off",
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": "off",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "error",
        "for-direction": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": "off",
        "func-style": "error",
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "generator-star-spacing": "error",
        "getter-return": "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "id-denylist": "error",
        "id-length": "off",
        "id-match": "error",
        "implicit-arrow-linebreak": "error",
        "indent": [
            "error",
            4
        ],
        "init-declarations": "error",
        "jsdoc/check-access": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-examples": "off",
        "jsdoc/check-indentation": "off",
        "jsdoc/check-line-alignment": "error",
        "jsdoc/check-param-names": "error",
        "jsdoc/check-property-names": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/check-values": "error",
        "jsdoc/empty-tags": "error",
        "jsdoc/implements-on-classes": "error",
        "jsdoc/imports-as-dependencies": "off",
        "jsdoc/informative-docs": "error",
        "jsdoc/match-description": "error",
        "jsdoc/match-name": "off",
        "jsdoc/multiline-blocks": "off",
        "jsdoc/no-bad-blocks": "error",
        "jsdoc/no-blank-block-descriptions": "error",
        "jsdoc/no-blank-blocks": "error",
        "jsdoc/no-defaults": "error",
        "jsdoc/no-missing-syntax": "off",
        "jsdoc/no-multi-asterisks": "off",
        "jsdoc/no-restricted-syntax": "off",
        "jsdoc/no-types": "off",
        "jsdoc/no-undefined-types": "off",
        "jsdoc/require-asterisk-prefix": "error",
        "jsdoc/require-description": "error",
        "jsdoc/require-description-complete-sentence": "error",
        "jsdoc/require-example": "off",
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
        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-param-name": "error",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-property": "error",
        "jsdoc/require-property-description": "error",
        "jsdoc/require-property-name": "error",
        "jsdoc/require-property-type": "error",
        "jsdoc/require-returns": "off",
        "jsdoc/require-returns-check": "error",
        "jsdoc/require-returns-description": "off",
        "jsdoc/require-returns-type": "error",
        "jsdoc/require-throws": "error",
        "jsdoc/require-yields": "error",
        "jsdoc/require-yields-check": "error",
        "jsdoc/sort-tags": "error",
        "jsdoc/tag-lines": "error",
        "jsdoc/text-escaping": "off",
        "jsdoc/valid-types": "error",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "line-comment-position": "error",
        "linebreak-style": "error",
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": false
            }
        ],
        "lines-between-class-members": "error",
        "logical-assignment-operators": "error",
        "max-classes-per-file": "off",
        "max-depth": "error",
        "max-len": [
            "error",
            {
                "ignoreRegExpLiterals": true,
                "ignoreUrls": true
            }
        ],
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-nested-callbacks": "error",
        "max-params": [
            "error",
            5
        ],
        "max-statements": "off",
        "max-statements-per-line": "error",
        "multiline-comment-style": "off",
        "multiline-ternary": "error",
        "new-cap": "off",
        "new-parens": "error",
        "newline-per-chained-call": "off",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
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
        "no-constructor-return": "off",
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
        "no-extra-parens": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
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
        "no-loop-func": "off",
        "no-loss-of-precision": "error",
        "no-magic-numbers": "off",
        "no-misleading-character-class": "error",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxBOF": 0,
                "maxEOF": 0
            }
        ],
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
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
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-setter-return": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
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
        "no-unused-vars": "warn",
        "no-use-before-define": "warn",
        "no-useless-assignment": "error",
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
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": "error",
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": true
            }
        ],
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "padding-line-between-statements": "error",
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
                "blankLine": "any",
                "next": [
                    "export",
                    "cjs-export"
                ],
                "prev": "*"
            },
            {
                "blankLine": "never",
                "next": [
                    "import",
                    "cjs-import"
                ],
                "prev": [
                    "import",
                    "cjs-import"
                ]
            },
            {
                "blankLine": "never",
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
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "off",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": "error",
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "radix": "error",
        "require-atomic-updates": "off",
        "require-await": "error",
        "require-unicode-regexp": "off",
        "require-yield": "error",
        "rest-spread-spacing": "error",
        "semi": [
            "error",
            "never"
        ],
        "semi-spacing": "error",
        "semi-style": [
            "error",
            "first"
        ],
        "sort-imports": "error",
        "sort-keys": "off",
        "sort-keys/sort-keys-fix": [
            "warn",
            "asc",
            {
                "natural": true
            }
        ],
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": [
            "error",
            "global"
        ],
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "wrap-regex": "off",
        "yield-star-spacing": "error",
        "yoda": "error"
    },
    "settings": {
        "jsdoc": {
            "mode": "typescript"
        }
    }
}
