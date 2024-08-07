import {
    createQueryKeys,
    mergeQueryKeys,
} from "@lukemorales/query-key-factory";
import {unref, type Ref, toValue,} from "vue";

export const valueQueries = createQueryKeys("value", {
    someQuery: (val: Ref<string>) => {
        return {
            queryKey: ["byTool", val],
            queryFn: async () => `My value is ${unref(val)}`,
        };
    },
    someOtherQuery: (val: Ref<string>) => {
        return {
            queryKey: ["byTool", toValue(val)] as const,
            queryFn: async () => `My value is ${unref(val)}`,
        };
    },
});

export const queries = mergeQueryKeys(valueQueries);
