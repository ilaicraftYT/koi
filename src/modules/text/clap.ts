import { KoiException } from '../../error/KoiError';
export function clap(str: string, max?: number): string{
    const a: Array<string> = str.split(" ")

    if(!max) max = 20
    // @ts-ignore - As we use an conditional to define the max length, we need to ignore the type checker
    a.forEach((v, k) =>  { v.length > max ? a[k] = v.substr(0, max) : v = v})

    if(a.length < 2) throw new KoiException("Clap function needs at least 2 words")
    const b: string = a.join(" 👏 ")
    return b;
}