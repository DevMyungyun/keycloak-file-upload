import { Request } from 'express';

abstract class upload {
    protected abstract options(): void;
    protected abstract filter(): Function;
    public abstract uploadFile(req: Request): any;
}

export default upload;