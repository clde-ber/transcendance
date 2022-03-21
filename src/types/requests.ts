import * as m from 'mithril';

export type RequestParams = m.RequestOptions<unknown> & {
    url: string
}