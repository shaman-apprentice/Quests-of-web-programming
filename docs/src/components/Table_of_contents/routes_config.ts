export interface RouteI {
    /** name of route, which will appear in browser */
    name: string,
    /** by default implemented react-router matches to '/name'.
     * If set, Route receives prop path, which has to validate against path-to-regexp. */
    path?: string,
    /** whether path should match exact or also partially */
    exact?: boolean,
    /** whether svg img is included in table of contents */
    has_svg?: boolean,
}

export const routes_config: RouteI[] = [
    {
        name: 'About',
        path: '/(index)?(index.html)?',
        has_svg: false,
    },
    {
        name: 'Every_story_needs_a_beginning',
    },
    {
        name: 'Ghosts_of_the_past',
    },
    {
        name: 'Tree_of_almost_wisdom',
    },
    {
        name: 'Not_found',
        exact: false,
        path: '/',
        has_svg: false,
    },
];