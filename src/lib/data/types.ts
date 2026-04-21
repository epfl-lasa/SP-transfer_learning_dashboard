// In this file, all the types we needed to create in order to match the current paper structure
export interface Paper {
    slug: string;
    title: string;
    outlet: string | null;
    year: number | null;
    citations: number | null;
    downloads: number | null;
    summary: string | null;
    key_contribution: string | null;
    transfer_type: string[];
    transfer_mode: string | null;
    transfer_domain: string[];
    primary_method: string | null;
    application: string | null;
    robot_experiment: boolean | null;
    source_robot: string | null;
    source_environment: string | null;
    source_task: string | null;
    target_robot: string | null;
    target_environment: string | null;
    target_task: string | null;
    computational_cost: string | null;
    paper_rating: number | null;
    impact: string | null;
    weaknesses: string | null;
    relevance: number | null;
    confidence: number | null;
    needs_manual_review: boolean | null;
    paper_id: string | null;
}

export interface RatingScale {
    min: number;
    max: number;
    labels: Record<string, string>;
}

// this is just to avoid having type any, which could bring silent errors down the line
export interface Taxonomies {
    transfer_type: string[];
    transfer_mode: string[];
    transfer_domain: string[];
    computational_cost: string[];
    impact: string[];
    application: string[];
    paper_rating: RatingScale;
    relevance: RatingScale;
    confidence: RatingScale;
}