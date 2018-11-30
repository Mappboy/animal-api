import _ from 'lodash';


export function isFirstPage(page) {
    if (page === 1)
        return true;
    return false;
}
export function add(base, number) {
    return base + number;
}
export function isLastPage(total, page, pagination) {
    if (total <= page * pagination)
        return true;
    return false;
}
export function hasRescue(rescue) {
    if (rescue !== undefined && rescue.deleted === false)
        return true;
    return false;
}