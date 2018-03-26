export interface RouteI {
    /** name of route, which will appear in browser */
    name: string,
    /** by default implemented react-router matches to '/name'.
     * If set, Route receives prop path, which has to validate against path-to-regexp. */
    path?: string,
    /** whether path should match exact or also partially */
    exact?: boolean,
}

export const routes_config: RouteI[] = [
    {
        name: 'About_me',
        path: '/(index)?(index.html)?',
    },
    {
        name: 'Every_story_needs_a_beginning',
    },
    {
        name: 'Not_found',
        exact: false,
        path: '/',
    },
];