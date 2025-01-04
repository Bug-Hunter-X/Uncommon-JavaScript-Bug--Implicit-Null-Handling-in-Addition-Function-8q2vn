# Uncommon JavaScript Bug: Implicit Null Handling

This repository demonstrates a subtle bug in a JavaScript function that handles null values implicitly. The function `foo` adds two numbers, but its handling of null values is incomplete, leading to potential issues.  This example highlights the importance of explicit null checks and clear documentation.

## Bug Description
The `foo` function aims to add two numbers. It correctly handles cases where one argument is null, but fails to explicitly handle the scenario where both arguments are null.  This could lead to unexpected behavior or errors in some environments. The lack of explicit documentation regarding null handling also makes the code less maintainable.

## Solution
The solution addresses the bug by explicitly checking if both arguments are null.  This avoids potential issues and improves code clarity.  The improved documentation also clarifies the function's behavior regarding null values.