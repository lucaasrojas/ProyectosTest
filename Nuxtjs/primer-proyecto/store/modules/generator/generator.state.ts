export interface Manifest {
    background_color: string | null;
    description: string | null;
    dir: string | null;
    display: string;
    lang: string | null;
    name: string | null;
    orientation: string | null;
    prefer_related_applications: boolean;
    
    scope: string | null;
    short_name: string | null;
    start_url: string | null;
    theme_color: string | null;
}

export interface State {
    url: string | null;
    manifest: Manifest | null;

}