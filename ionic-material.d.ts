import 'ionic';

// Support for AMD require and CommonJS
declare module 'ionic-material' {
    export default "material";
    export type IInk = ionic.material.IInk;
    export type IDisplayEffectOptions = ionic.material.IDisplayEffectOptions;
    export type IMotion = ionic.material.IMotion;
}

declare namespace ionic.material {

    interface IInk {
        displayEffect(options: IDisplayEffectOptions): void;
        displayEffect(): void;
    }

    interface IDisplayEffectOptions {
        duration: number;
    }

    interface IMotion {
        blinds(options: IEffecttOptions): void;
        blinds(): void;
        fadeSlideIn(options: IEffecttOptions): void;
        fadeSlideIn(): void;
        fadeSlideInRight(options: IEffecttOptions): void;
        fadeSlideInRight(): void;
        panInLeft(options: IEffecttOptions): void;
        panInLeft(): void;
        pushDown(options: IEffecttOptions): void;
        pushDown(options: string): void;
        ripple(options: IEffecttOptions): void;
        ripple(): void;
        slideUp(options: IEffecttOptions): void;
        slideUp(options: string): void;
    }

    interface IEffecttOptionsBase {
        selector: string;
    }

    interface IEffecttOptions extends ionic.material.IEffecttOptionsBase {
        finishDelayThrottle?: number;
        finishSpeedPercent?: number;
        leftOffsetPercentage?: number;
        startVelocity?: number;
    }
}