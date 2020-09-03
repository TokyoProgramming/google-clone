import React from 'react';
import './SearchPage.css';
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import Response from "../../response"
import {Link} from "react-router-dom";
import Search from "../Search/Search";
import SearchIcon from '@material-ui/icons/Search';
import {Description, Image, LocalOffer, MoreVert, Room} from "@material-ui/icons";



function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    //LIVE CALL
    const { data } = useGoogleSearch(term)
    // const data = Response;
    // https://cse.google.com/cse/create/new
    console.log(data)
    return (
        <div className="searchPage">
            <div className='searchPage__header'>
                {/*<h1>{term}</h1>*/}
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />

                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Description />
                                <Link to="/news">news</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Image />
                                <Link to="/image">Image</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOffer />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Room />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVert />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='searchPage__results'>
                {term && (
                    <div className='searchPage__results'>
                        <p className="searchPage__resultCount">
                            About
                            {data?.searchInformation.formattedTotalResults} results({data?.formattedSearchTime} seconds) for {term}
                        </p>
                        {data?.items.map(item => (
                            <div className='searchPage__result'>
                                <a href={item.link}>
                                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src && (

                                        <img
                                            className="searchPage__resultImage"
                                            src={item.pagemap?.cse_image[0]?.src}
                                            alt=""
                                        />
                                        )}
                                    {item.displayLink}
                                </a>
                                <a className='searchPage__resultTitle' href={item.link}>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPage__resultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
      )
 }

 export default SearchPage
