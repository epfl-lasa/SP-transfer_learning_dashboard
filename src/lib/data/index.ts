import papersRaw from './papers.json';
import taxonomiesRaw from './taxonomies.json';
import type { Paper, Taxonomies } from './types';

export const papers: Paper[] = papersRaw as Paper[];
export const taxonomies: Taxonomies = taxonomiesRaw as unknown as Taxonomies;

// slug is the title of the paper in small caps with '-' as separator
export function getPaperBySlug(slug: string): Paper | undefined {
    return papers.find(p => p.slug === slug);
}

// gives us a list of the unique values in the transfer_type and transfer_domain fields
export function getUsedValues(field: 'transfer_type' | 'transfer_domain'): string[] {
    const values = new Set<string>();
    for (const paper of papers) {
        for (const v of paper[field]) {
            values.add(v);
        }
    }
    return [...values];
}

export function getStats() {
    return {
        totalPapers: papers.length,
        withRealRobot: papers.filter((p) => p.robot_experiment === true).length,
        uniqueDomains: getUsedValues('transfer_domain').length,
        uniqueApplications: new Set(papers.map((p) => p.application).filter(Boolean)).size,
    };
}
