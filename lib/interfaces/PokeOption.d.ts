export default interface PokeOption<Body> {
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE';
    path?: string;
    port?: number;
    headers?: Headers;
    query?: {
        [key: string]: number | boolean | string | null;
    };
    body?: Body;
    gzip?: boolean;
    timeout?: number;
    username?: string;
    password?: string;
}
