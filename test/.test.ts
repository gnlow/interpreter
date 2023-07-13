import { assert, assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts"
import { parse, query } from "../src/mod.ts"



Deno.test("test", () => {
    assertEquals(parse("123"), { value: 123 })
    assertEquals(
        query({ constant: "a" })
            (parse("a: b: 123")),
        parse("b: 123"), 
    )
    assertEquals(
        query(parse("fib 0"))(parse("fib: 0 -> 0")),
        parse("0"),
    )
})