import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts"
import { run } from "../src/mod.ts"

Deno.test("test", () => {
    assertEquals(run(""), "Hello, world!")
})