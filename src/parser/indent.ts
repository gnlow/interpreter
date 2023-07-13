import {$} from "https://deno.land/x/iteruyo@v0.3.0/mod.ts"

const getIndent = (line: string) => / */.exec(line)![0].length
const ripIndent = (line: string) => line.replace(/^ */, "")

export const indentPreprocess =
    (text: string) =>
    $(text)
    .split("\n")
    .map(x => x.join(""))
    .map(line => ({line, indent: getIndent(line)}))
    .reduceWithGenerator(function*(prevIndent, {line, indent}) {
        if (indent > prevIndent) {
            yield "("
        } else if (indent < prevIndent) {
            yield "); "
        } else {
            yield "; "
        }
        yield ripIndent(line)
        return indent
    }, 0, {line: "", indent: 0})
    .flat()
    .bypass(x => console.log(x.join("")))
    .toString()