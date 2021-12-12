/*
Koi - Complement for discord.js

    Copyright (C) 2021-2022  ilai
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU Affero General Public License as published
        by the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Affero General Public License for more details.
*/
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