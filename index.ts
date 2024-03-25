import * as solver from "javascript-lp-solver";

type TDimension = "halter" | "cost"
type TVariables = "4er" | "6er";

type TModel = Parameters<typeof solver.Solve<TVariables, TDimension>>[0];

const model = (min: number) => {
    return {
        optimize: "cost",
        opType: "min",
        constraints: {
            halter: {min},
        },
        variables: {
            "6er": {
                halter: 6,
                cost: 19.95
            },
            "4er": {
                halter: 4,
                cost: 12.95
            }
        },
        ints: {"6er": 1, "4er": 1}
    } as TModel;
}

 const all = Array.from({length:29})
     .map((_,i)=>4+2*i)
     .map(i=>{return {...solver.Solve<TVariables, TDimension>(model(i)), anzahl: i}})

console.table(all, ["anzahl", "result", "4er", "6er"]);
