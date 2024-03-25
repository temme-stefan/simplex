type TSolverModel<TVariableNames extends string, TDimensions extends string> = {
    optimize: TDimensions
    opType:  "min" | "max"
    constraints?: { [key in TDimensions]?: { min?: number, max?: number } }
    variables: { [key in TVariableNames]:  { [key in TDimensions]: number } }
    ints?: { [key in TVariableNames]?: 1 }
}

type TSolverResult<TVariableNames extends string> =
    { [key in TVariableNames]?: number } &
    {
        feasible: boolean
        result: number
        bounded: boolean
        isIntegral: boolean
    }


// @ts-ignore
declare module "javascript-lp-solver" {
    /**
     * Solves a (I)LP
     * @param model the model we want to solve
     */
    function Solve<TVariableNames extends string, TDimensions extends string>(model: TSolverModel<TVariableNames, TDimensions>): TSolverResult<TVariableNames>

    export {
        Solve
    }
}