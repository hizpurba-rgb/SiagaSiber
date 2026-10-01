---
name: reverse-engineering
description: Static and dynamic reverse engineering — ELF/PE analysis, custom-VM bytecode, packed binaries, anti-debug bypass, Frida hooking.
category: "community"
version: "1.0.0"
author: "transilienceai-communitytools"
license: "MIT"
source: "https://github.com/transilienceai/communitytools"
sha256: ae4f9d9bc51fec1b18695e17c3ecaa638e074901839595323e898dfc3d70d9cd
signature: rUq+Tuz3A5qN4YyxoubWrvTuZa9Kr8+yHEHUOXxdEZ9g5QXFErHV60hmz+MThFM6PpV1/jswakVh7NMSrNEbDg==
signed_by: siaga-official
---

# Reverse Engineering

## Scope

Reverse engineering compiled binaries (ELF, PE, Mach-O) and bytecode artifacts to recover algorithms, validate inputs, or build static solvers. Focused on the recurring CTF / malware-analysis pattern of a host binary that loads a "program" file under a custom ISA — recognising the dispatcher loop, mapping opcodes to Python lambdas, and inverting the transformation chain in pure Python without executing the host. Also covers callfuscation (control-flow chunking), MBA (mixed boolean-arithmetic) operator obfuscation, encrypted-handler tricks, and three-layer deobfuscation pipelines.

## When to use

- A binary plus a "program data" file are delivered together and the binary appears to be an interpreter (themed opcode names, dispatcher switch / jump table).
- Disassembly reveals a `while(true){ op = mem[pc++]; switch(op){...}; }` style loop or jump-table indexed by opcode.
- The binary is heavily obfuscated (callfuscation, MBA wrappers, encrypted handlers in `.data` decrypted to RWX at startup).
- You need to recover an algorithm or check function from native code without dynamic execution (anti-debug, wrong arch, no TTY).
- Static-first reverse engineering is preferred (faster, more reliable than emulator chains).

## References

- [reference/custom-vm-bytecode.md](reference/custom-vm-bytecode.md) — recognising and inverting custom stack/register/tape VMs; callfuscation linearization; MBA operator identification; encrypted-handler decryption.
