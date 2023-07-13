import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts"
import { parse } from "../src/mod.ts"



Deno.test("test", () => {
    assertEquals(parse("123"), { value: 123 })
})