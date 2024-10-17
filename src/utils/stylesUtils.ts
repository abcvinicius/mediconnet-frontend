/**
 * Calcula a largura percentual com base em um sistema de grid de 1 a 12.
 * @param size Número inteiro de 1 a 12 para representar o tamanho no grid.
 * @returns Largura percentual calculada com base no tamanho do grid.
 */
export const gridWidth = (size: number): string => {
    if (size >= 1 && size <= 12) {
        return `${ (size / 12) * 100 }%`;
    }
    return '100%';
};

/**
 * Calcula a largura em rem com base em um sistema de grid de 1 a 12.
 * @param size Número inteiro de 1 a 12 para representar o tamanho no grid.
 * @param baseSize Tamanho base em pixels para 1rem (por padrão 16px).
 * @returns Largura calculada em rem com base no tamanho do grid.
 */
export const gridWidthRem = (size: number, baseSize: number = 16): string => {
    if (size >= 1 && size <= 12) {
        const widthPercent = (size / 12) * 100;
        // Calcula a largura em pixels e converte para rem
        const widthPx = (widthPercent / 100) * baseSize * 12;
        return `${ widthPx / baseSize }rem`;
    }
    return `${ baseSize }rem`;
};

/**
 * Calcula a largura em rem com base em um sistema de grid de 1 a 12.
 * @param size Número inteiro de 1 a 12 para representar o tamanho no grid.
 * @returns Largura calculada em rem com base no tamanho do grid.
 */
export const getLogoSize = (size: number): string => {
    const sizeToRemMap: { [key: number]: number } = {
        1: 0.5,
        2: 1,
        3: 1.2,
        4: 1.5,
        5: 2,
        6: 2.5,
        7: 3,
        8: 3.5,
        9: 4,
        10: 4.5,
        11: 5,
        12: 5.5
    };

    return `${ sizeToRemMap[size] }rem`;  // Padrão para 1rem se o size estiver fora do intervalo
};