# Project rules

**First, every session:** if `.core/AGENTS.md` does not exist, run `./scripts/setup.sh` before anything else. It fetches the shared core into `.core/`. Then read `.core/AGENTS.md`, and if `docs/brief.md` is not filled in yet, follow `.core/skills/kickoff/SKILL.md`. In Claude Code a session hook does this for you.

Read and follow `.core/AGENTS.md` first. It holds the shared house rules, and the skills are in `.core/skills/`.

This project uses the **internal** profile (see `.buildkit`). It is a tool for the agency itself, so it has to keep working: type errors, vulnerable dependencies and hand-made components block, on top of secrets and real personal data. The live link is public, so use fake data.

## About this tool

See `docs/brief.md`. Add project-specific rules below this line.
