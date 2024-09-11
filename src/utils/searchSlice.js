import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResult: (state, action) => {
            state = Object.assign(state, action.payload);
            // state = { ...state, ...action.payload };
        },
    },
});

export default searchSlice.reducer;
export const { cacheResult } = searchSlice.actions;

// This is LRU(Least Recently Used) Need to change some access point so data can be added to initialState

// import { createSlice } from "@reduxjs/toolkit";

// const MAX_CACHE_SIZE = 5; // Define max size of cache

// const searchSlice = createSlice({
//     name: "search",
//     initialState: {
//         cache: {}, // Plain object for cache storage
//         usageOrder: [], // Array to track the order of keys
//     },
//     reducers: {
//         cacheResult: (state, action) => {
//             const key = action.payload.key;
//             const value = action.payload.value;

//             // If the key already exists, remove it from usageOrder to update its position
//             if (state.cache[key]) {
//                 state.usageOrder = state.usageOrder.filter(
//                     (item) => item !== key
//                 );
//             }

//             // Add the key-value pair to the cache
//             state.cache[key] = value;

//             // Push the key to the end of usageOrder (most recently used)
//             state.usageOrder.push(key);

//             // If cache exceeds the max size, evict the least recently used (first) item
//             if (state.usageOrder.length > MAX_CACHE_SIZE) {
//                 const oldestKey = state.usageOrder.shift(); // Remove the first item (LRU)
//                 delete state.cache[oldestKey]; // Remove the item from cache
//             }
//         },
//     },
// });

// export default searchSlice.reducer;
// export const { cacheResult } = searchSlice.actions;
