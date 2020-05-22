lhs operator rhs

lhs or rhs:

-   ['integer', value]
-   ['percentage', value]
-   ['boolean', value]
-   ['date', value]
-   ['datetime', value]
-   ['select', value]
-   ['tags', value]
-   ['multi-select', value]
-   ['typeahead', value]
-   ['text', value]
-   ['duration', value]
-   ['expression', expression]

????
field operator value (via and editor may be static or func 'think duration or aribtrary?')

[LHS, operator, RHS]

a field of type X, can have comparators of [Y,] and right side of [Z,]
DateFromSrc -> MomentType -> MomentComparators -> (Duration + Calendar + Time)editors

Comparators have types which determine editors:
Such as... relative date (duration) for example vs a static date/time

ClauseEditor

LHS [field|expression]
field [bool|float|int|moment|str]
expression [*]
bool [isTrue, isFalse]
float [==,>,>=,<,<=,<>]
int [==,>,>=,<,<=,<>]
moment [before, willHappen, hasHappened]
str [matches|notMatches|etc]
RHS [field|static]
static [bool|float|int|moment|str]

serializing the model that drives the editor & engine;

an expression is a single input value for simplicity
an expression must evaluate to a number
