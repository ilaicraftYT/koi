export class KoiException extends Error {
    public isKoiException: boolean = false;
    constructor(message: string, koiexception?: boolean) {
        super(message);
        if(!koiexception) this.isKoiException = false;
    }
}