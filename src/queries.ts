import {
    createQueryKeys,
    mergeQueryKeys,
} from "@lukemorales/query-key-factory";
import { unref, type Ref,  } from "vue";

export const valueQueries = createQueryKeys("value", {
    someQuery: (val: Ref<string | undefined>) => {
        return {
            queryKey: ["byTool", val],
            queryFn: async () => `My value is ${unref(val)}`,
        };
    },
});

export const queries = mergeQueryKeys(valueQueries);
