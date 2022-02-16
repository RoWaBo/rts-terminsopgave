import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { colors, spacing } from "../style/style";
import MainLayout from "../components/MainLayout";
import SearchInput from "../components/SearchBar";


const Search = () => {

    const [activities, setActivities] = useState();
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        if (activities) return
        (async () => {
            const { data: activities } = await axios('http://localhost:4000/api/v1/activities')
            setActivities(activities)
        })()
    }, [activities]);

    useEffect(() => {
        if (!activities || search === '') return
        const filteredActivities = activities.filter(activity => {
            return activity.name.toLowerCase().includes(search.toLowerCase())
        })
        setSearchResult([...filteredActivities])
    }, [search, activities]);

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
        padding: 0 ${spacing.gutter};
        color: ${colors.white};    
    `

    return (
        <MainLayout>
            <PageHeader heading="Søg" css={pageHeadingStyle} />
            <SearchInput inputValue={search} inputOnChangeFcn={setSearch} />
            {search !== '' && (
                <ul css={listStyle}>
                    {searchResult?.map(({ id, name, minAge, maxAge, asset }, i) => (
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
            )}
            {searchResult?.length === 0 && (
                <p css={errorMessageStyle}>
                    Der blev ikke fundet nogle aktiviteter.
                    <br />
                    Prøv at søge efter noget andet.
                </p>
            )}
        </MainLayout>
    );
}

export default Search;