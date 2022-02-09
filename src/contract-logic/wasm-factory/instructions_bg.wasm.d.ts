/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function initializeAuctionWasm(a: number, b: number, c: number): void;
export function freezeAuctionWasm(a: number, b: number, c: number): void;
export function placeBidWasm(a: number, b: number, c: number): void;
export function claimFundsWasm(a: number, b: number, c: number): void;
export function getAuctionWasm(a: number, b: number): number;
export function getAuctionCycleStateWasm(a: number, b: number, c: number): number;
export function getTopBidderWasm(a: number, b: number): number;
export function getCurrentCycleWasm(a: number, b: number): number;
export function getAuctionPoolPubkeyWasm(): number;
export function getAuctionRootStatePubkeyWasm(a: number, b: number): number;
export function __wbg_keypair_free(a: number): void;
export function transaction_constructor(a: number, b: number): number;
export function transaction_message(a: number): number;
export function transaction_messageData(a: number, b: number): void;
export function transaction_verify(a: number, b: number): void;
export function transaction_partialSign(a: number, b: number, c: number): void;
export function transaction_isSigned(a: number): number;
export function transaction_toBytes(a: number, b: number): void;
export function transaction_fromBytes(a: number, b: number, c: number): void;
export function keypair_constructor(): number;
export function keypair_toBytes(a: number, b: number): void;
export function keypair_fromBytes(a: number, b: number, c: number): void;
export function keypair_pubkey(a: number): number;
export function __wbg_transaction_free(a: number): void;
export function entrypoint(a: number): number;
export function __wbg_instructions_free(a: number): void;
export function instructions_constructor(): number;
export function instructions_push(a: number, b: number): void;
export function __wbg_pubkey_free(a: number): void;
export function init(): void;
export function pubkey_constructor(a: number, b: number): void;
export function pubkey_toString(a: number, b: number): void;
export function pubkey_isOnCurve(a: number): number;
export function pubkey_equals(a: number, b: number): number;
export function pubkey_toBytes(a: number, b: number): void;
export function pubkey_createWithSeed(a: number, b: number, c: number, d: number, e: number): void;
export function pubkey_createProgramAddress(a: number, b: number, c: number, d: number): void;
export function pubkey_findProgramAddress(a: number, b: number, c: number, d: number): void;
export function __wbg_instruction_free(a: number): void;
export function hash_constructor(a: number, b: number): void;
export function hash_toString(a: number, b: number): void;
export function hash_equals(a: number, b: number): number;
export function hash_toBytes(a: number, b: number): void;
export function __wbg_hash_free(a: number): void;
export function __wbg_message_free(a: number): void;
export function __wbg_get_message_recent_blockhash(a: number): number;
export function __wbg_set_message_recent_blockhash(a: number, b: number): void;
export function systeminstruction_createAccount(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function systeminstruction_createAccountWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number): number;
export function systeminstruction_assign(a: number, b: number): number;
export function systeminstruction_assignWithSeed(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_transfer(a: number, b: number, c: number, d: number): number;
export function systeminstruction_transferWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function systeminstruction_allocate(a: number, b: number, c: number): number;
export function systeminstruction_allocateWithSeed(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function systeminstruction_createNonceAccount(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_advanceNonceAccount(a: number, b: number): number;
export function systeminstruction_withdrawNonceAccount(a: number, b: number, c: number, d: number, e: number): number;
export function systeminstruction_authorizeNonceAccount(a: number, b: number, c: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8f85d3423f24535c(a: number, b: number, c: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__h375ebced031f9a17(a: number, b: number, c: number, d: number): void;
