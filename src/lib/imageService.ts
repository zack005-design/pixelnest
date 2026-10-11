import catalogue from './catalogue.json';
import type {Pin} from './data';
export type ImageProvider='LOCAL'|'EXTERNAL'|'AI';
type Adapter=(operation:string,input?:string)=>Promise<Pin[]>;
const adapters:Partial<Record<ImageProvider,Adapter>>={};
/** Providers run through a server endpoint. Never pass API secrets from the browser. */
export function registerImageProvider(provider:ImageProvider,adapter:Adapter){adapters[provider]=adapter}
let provider:ImageProvider='LOCAL';
export function setImageProvider(value:ImageProvider){provider=value}
const local=catalogue as Pin[];
async function request(operation:string,input:string|undefined,fallback:()=>Pin[]){try{const adapter=adapters[provider];if(adapter){const pins=await adapter(operation,input);if(pins.length)return pins}}catch{}return fallback()}
const includes=(p:Pin,q:string)=>[p.title,p.category,p.description,p.style,...p.tags,...p.moods].join(' ').toLowerCase().includes(q.toLowerCase());
export const searchImages=(q:string)=>request('search',q,()=>local.filter(p=>includes(p,q)));
export const getTrendingImages=()=>request('trending',undefined,()=>local.filter(p=>p.trending));
export const getExploreImages=()=>request('explore',undefined,()=>local);
export const getCategoryImages=(category:string)=>request('category',category,()=>local.filter(p=>p.category===category));
export const getFeaturedImages=()=>request('featured',undefined,()=>local.filter(p=>p.featured));
export const getColorImages=(color:string)=>request('color',color,()=>local.filter(p=>p.dominantColor===color));
export const getMoodImages=(mood:string)=>request('mood',mood,()=>local.filter(p=>p.moods.includes(mood)));
export const getRelatedImages=(id:string)=>request('related',id,()=>{const target=local.find(p=>p.id===id);if(!target)return local;const score=(p:Pin)=>Number(p.category===target.category)*5+Number(p.style===target.style)*2+Number(p.dominantColor===target.dominantColor)*2+Number(p.creator===target.creator)+p.tags.filter(tag=>target.tags.includes(tag)).length+p.moods.filter(mood=>target.moods.includes(mood)).length;return local.filter(p=>p.id!==id).sort((a,b)=>score(b)-score(a))});
export const getSimilarImages=getRelatedImages;
export const imageService={searchImages,getTrendingImages,getExploreImages,getCategoryImages,getRelatedImages,getSimilarImages,getFeaturedImages,getColorImages,getMoodImages,setImageProvider,registerImageProvider};
