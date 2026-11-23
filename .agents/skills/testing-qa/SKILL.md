# Testing and QA

## Responsibilities

Choose focused evidence that changed behavior works across the threads_connect workspace.

## Workflow

1. Read root `AGENTS.md` and identify user-visible behavior, boundaries, and regression risks.
2. Add unit tests for rules, integration tests for boundaries, and end-to-end coverage for critical flows.
3. Cover success, invalid input, permission/error, loading, and empty-state behavior as applicable.
4. Run the narrow checks first, then workspace build, typecheck, lint, and tests.
5. Report each command and its result; distinguish skipped checks from passing checks.

## Quality checks

- Tests assert behavior rather than implementation details.
- Failures are deterministic and actionable; external services are isolated or explicitly provisioned.
- Accessibility, responsive behavior, and error recovery are verified for UI changes.
- Never claim a check passed unless its command completed successfully.
