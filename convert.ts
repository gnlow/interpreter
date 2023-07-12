/*
    Make antlr4ts files compatible to deno
*/

for await (const dirEntry of Deno.readDir("src/parser/dist")) {
    if (
        dirEntry.name.endsWith(".ts")
    ) {
        console.log(`Converting '${dirEntry.name}'`)

        const path = "src/parser/dist/" + dirEntry.name
        const script = await Deno.readTextFile(path)
        const denoScript = script.replaceAll(/import (.*) from "(.*\/.*)"/g, `import $1 from "$2.ts"`)
        Deno.writeTextFile(path, denoScript)
    }
}