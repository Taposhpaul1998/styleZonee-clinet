import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

const useCreateDynamicUrl = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [queryUrl, setQueryUrl] = useState()
    const { tag, category, priceSort, search, sort } = useSelector(state => state.Filters)

    const q = searchParams.get('q')
    const tags = searchParams.get('tag')
    const categorys = searchParams.get('category')
    const priceMin = searchParams.get('priceMin')
    const priceMax = searchParams.get('priceMax')
    const sorts = searchParams.get('sort')
    console.log(q, tags, categorys, priceMax, priceMin, sorts);

    useEffect(() => {
        let query = {}
        if (search) {
            query = { ...query, q: search }
        }
        if (tag) {
            query = { ...query, tag }
        }
        if (category) {
            query = { ...query, category }
        }
        if (priceSort) {
            query = { ...query, priceMin: priceSort?.gte, priceMax: priceSort?.lte }
        }
        if (sort) {
            query = { ...query, sort }
        }
        setSearchParams(query)
    }, [tag, category, priceSort, search, sort, setSearchParams, queryUrl])

    useEffect(() => {

        let url = '/products?'
        if (q) {
            url = `${url}&text=${q}`
        }
        if (tags) {
            url = `${url}&tags=${tags}`
        }
        if (categorys) {
            url = `${url}&category=${categorys}`
        }
        if (priceMin && priceMax) {
            url = `${url}&price[gte]=${priceMin}&price[lte]=${priceMax}`
        }
        if (sorts) {
            url = `${url}&sort=${sorts}`
        }
        setQueryUrl(url)
    }, [q, tags, categorys, priceMin, priceMax, sorts])

    return queryUrl
}
export default useCreateDynamicUrl