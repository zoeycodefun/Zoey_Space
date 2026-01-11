/**
 * 导航配置管理：定义网站主导航和子导航内容（安全类型，导航一致与可拓展）
 */


import type { GuideItem } from '../types/guide_type';
// 导航项ID常量
const NAVIGATION_IDS = {
    ABOUT: 'about_me_and_new',
    PROJECTS: 'projects',
    WEB3: 'web3',
    INTERESTS: 'interests',
    ACADEMIC_RESEARCH: 'academic_research',
} as const;
// 子导航项ID常量
const SUB__NAVIGATION_IDS = {
    // Projects 子导航
    ALPHA_HUB: 'alpha_hub',
    // Web3 子导航
    DATA_ANALYSIS: 'data_analysis',
    DEFI_ANNUAL_REPORT: 'defi_annual_report',
    PERSONAL_POST: 'personal_post',
    PROJECTS_RESEARCH: 'projects_research',
    LAWS_REGULATIONS: 'laws_regulations',
    // Interests 子导航
    MODELING_3D: '3d_modeling',
    LITERARY: 'literary',
    PODCAST: 'podcast',
    ANIME: 'anime',
    FILM: 'film',
    CRAFT_PAINT: 'craft_paint',
    PHOTOGRAPHY: 'photography',
    PSYCHOLOGY: 'psychology',
    MUSIC: 'music',
    CLOTH_DESIGN: 'cloth_design',
    GAME: 'game',
    // Academic & Research 子导航
    PUBLICATIONS: 'publications',
    AI: 'ai',
    ECONOMY: 'economy',
    FINANCE: 'finance',
    MATH: 'math',
    LAWS: 'laws',
} as const;

// 网站导航配置
export const guideConfig: readonly GuideItem[] = [
    {
        id: 'NAVIGATION_IDS.ABOUT',
        label:'About',
        path:'/',
    },

    {
        id:NAVIGATION_IDS.PROJECTS,
        label:'Projects',
        children:[
            {
                id:'SUB__NAVIGATION_IDS.ALPHA_HUB',
                label:'Alpha Hub',
                path:'/projects/alpha_hub'
            },
        ],
    },
    {
        id:NAVIGATION_IDS.WEB3,
        label:'Web3',
        children:[
            {
                id:SUB__NAVIGATION_IDS.DATA_ANALYSIS,
                label:'Data Analysis',
                path:'/web3/data_analysis'
            },
            {
                id:SUB__NAVIGATION_IDS.DEFI_ANNUAL_REPORT,
                label:'DeFi Annual Report',
                path:'/web3/defi_annual_report'
            },
            {
                id:SUB__NAVIGATION_IDS.PERSONAL_POST,
                label:'Personal Post',
                path:'/web3/personal_post'
            },
            {
                id:SUB__NAVIGATION_IDS.PROJECTS_RESEARCH,
                label:'Projects Research',
                path:'/web3/projects_research'
            },
            {
                id:SUB__NAVIGATION_IDS.LAWS_REGULATIONS,
                label:'Laws & Regulations',
                path:'/web3/laws_regulations'
            },
            
        ]
    },
    {
        id:NAVIGATION_IDS.INTERESTS,
        label:'Interests',
        children:[
            {
                id:SUB__NAVIGATION_IDS.MODELING_3D,
                label:'3D Modeling',
                path:'/interests/3d_modeling'
            },
            {
                id:SUB__NAVIGATION_IDS.LITERARY,
                label:'Literary',
                path:'/interests/literary'
            },
            {
                id:SUB__NAVIGATION_IDS.PODCAST,
                label:'Podcast',
                path:'/interests/podcast'
            },
            {
                id:SUB__NAVIGATION_IDS.ANIME,
                label:'Anime',
                path:'/interests/anime'
            },
            {
                id:SUB__NAVIGATION_IDS.FILM,
                label:'Film',
                path:'/interests/film'
            },
            {
                id:SUB__NAVIGATION_IDS.CRAFT_PAINT,
                label:'Craft & Paint',
                path:'/interests/craft_paint'
            },
            {
                id:SUB__NAVIGATION_IDS.PHOTOGRAPHY,
                label:'Photography',
                path:'/interests/photography'
            },
            {
                id:SUB__NAVIGATION_IDS.PSYCHOLOGY,
                label:'Psychology',
                path:'/interests/psychology'
            },
            {
                id:SUB__NAVIGATION_IDS.MUSIC,
                label:'Music',
                path:'/interests/music'
            },
            {
                id:SUB__NAVIGATION_IDS.CLOTH_DESIGN,
                label:'Cloth Design',
                path:'/interests/cloth_design'
            },
            {
                id:SUB__NAVIGATION_IDS.GAME,
                label:'Game',
                path:'/interests/game'
            },
    
        ]
    },

    {
        id:NAVIGATION_IDS.ACADEMIC_RESEARCH,
        label:'Academic & Research',
        children:[
            {
                id:SUB__NAVIGATION_IDS.PUBLICATIONS,
                label:'Publications',
                path:'/academic_research/publications'
            },
            {
                id:SUB__NAVIGATION_IDS.AI,
                label:'AI',
                path:'/academic_research/ai'
            },
            {
                id:SUB__NAVIGATION_IDS.ECONOMY,
                label:'Economy',
                path:'/academic_research/economy'
            },
            {
                id:SUB__NAVIGATION_IDS.FINANCE,
                label:'Finance',
                path:'/academic_research/finance'
            },
            {
                id:SUB__NAVIGATION_IDS.MATH,
                label:'Math',
                path:'/academic_research/math'
            },
            {
                id:SUB__NAVIGATION_IDS.LAWS,
                label:'Laws',
                path:'/academic_research/laws'
            },
        ],
    },
] as const;
// 类型守卫
export function isValidGuideItem(item: unknown): item is GuideItem {
  return (
    typeof item === 'object' &&
    item !== null &&
    typeof (item as GuideItem).id === 'string' &&
    typeof (item as GuideItem).label === 'string' &&
    (typeof (item as GuideItem).path === 'string' || Array.isArray((item as GuideItem).children))
  );
}