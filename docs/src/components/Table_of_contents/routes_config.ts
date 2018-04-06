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
        name: 'About',
        path: '/(index)?(index.html)?', // TODO mit query map open (default / when not set - true)
    },
    {
        name: 'Every_story_needs_a_beginning',
    },
    {
        name: 'Ghosts_of_the_past',
    },
    {
        name: 'Not_found',
        exact: false,
        path: '/',
    },
];