import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { colors, spacing } from "../style/style";
import MainLayout from "../components/MainLayout";
import SearchInput from "../components/SearchBar";
import ErrorMessage from "../components/ErrorMessage";


const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activities, setActivities] = useState();
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [searchResult, setSearchResult] = useState();

    // Get all activities and setting activities
    useEffect(() => {
        if (activities) return
        (async () => {
            const { data: activities } = await axios('http://localhost:4000/api/v1/activities')
            setActivities(activities)
        })()
    }, [activities]);

    // Filter activities on search and setting searchResult
    useEffect(() => {
        if (!activities || search === '') return
        const filteredActivities = activities.filter(activity => {
            return activity.name.toLowerCase().includes(search.toLowerCase())
        })
        setSearchResult([...filteredActivities])
    }, [search, activities]);

    // Adding search to URL search params
    useEffect(() => {
        setSearchParams({ search: search })
    }, [search, setSearchParams]);

    // === STYLE ===
    const listStyle = css`
        padding: 55px ${spacing.gutter};

        & > * {
            margin-bottom: 31px;
        }
    `
    const pageHeadingStyle = css`
        padding-bottom: 0;    
    `
    const errorMessageStyle = css`
        margin: 0 ${spacing.gutter};
    `

    return (
        <MainLayout>
            <PageHeader heading="Søg" css={pageHeadingStyle} />
            <SearchInput inputValue={search} inputOnChangeFcn={setSearch} setSearchParam={setSearchParams} />
            <ul css={listStyle}>
                {search !== '' && searchResult?.map(({ id, name, minAge, maxAge, asset }, i) => (
                    <li key={i}>
                        <Link to={`/aktivitetsdetaljer/${id}`}>
                            <ActivityCard
                                heading={name}
                                age={{
                                    min: minAge,
                                    max: maxAge
                                }}
                                imgUrl={asset.url}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
            {searchResult?.length === 0 && (
                <ErrorMessage icon css={errorMessageStyle}>
                    Der blev ikke fundet nogle aktiviteter.
                    <br />
                    Prøv at søge efter noget andet.
                </ErrorMessage>
            )}
        </MainLayout>
    );
}

export default Search;