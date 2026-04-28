/* tslint:disable */
/* eslint-disable */

/**
 * An opaque "handle" to platform-dependent audio output device.
 */
export class OutputDevice {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Closes the output device and release all system resources occupied by it. Any calls of this
     * method after the device was closed does nothing.
     */
    close(): void;
}

export function run_web(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run_web: () => void;
    readonly __wbg_outputdevice_free: (a: number, b: number) => void;
    readonly outputdevice_close: (a: number) => void;
    readonly __wasm_bindgen_func_elem_2524: (a: number, b: number) => void;
    readonly __wasm_bindgen_func_elem_3748: (a: number, b: number) => void;
    readonly __wasm_bindgen_func_elem_9149: (a: number, b: number) => void;
    readonly __wasm_bindgen_func_elem_12481: (a: number, b: number) => void;
    readonly __wasm_bindgen_func_elem_2911: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_12468: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_2909: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2909_2: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2909_3: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2909_4: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2909_5: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2909_6: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2909_7: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2909_8: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_3508: (a: number, b: number, c: number) => void;
    readonly __wasm_bindgen_func_elem_2910: (a: number, b: number) => void;
    readonly __wasm_bindgen_func_elem_9271: (a: number, b: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number) => void;
    readonly __wbindgen_export4: (a: number, b: number, c: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
