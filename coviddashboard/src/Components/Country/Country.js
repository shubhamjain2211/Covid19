import React, { useEffect, useState } from 'react';
import Up from '../../assets/images/Up.png';
import {useSelector , useDispatch } from 'react-redux';
import  * as actions from '../../Store/actions/index';
import classes from './Country.module.css';
import Search from './Searchbar';
import down from '../../assets/images/Down.png';

const Country = () => {

    const SearchedCountries = useSelector(state => state.countryWiseData.SearchedCountries)
    const AllCountries = useSelector(state => state.countryWiseData.AllCountries)
    const dispatch = useDispatch();
    const getCountryData = () => dispatch(actions.getCountryWiseData())
    const updateSearchedCountries = (SearchedCountries) => dispatch(actions.updateSearchedCountries(SearchedCountries))
    useEffect(() => {
                getCountryData()
    }, [])


    function titleCase(str) {
        var splitStr = str.split(' ');
        for (var i = 0; i < splitStr.length; i++) {

            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }



    const OnSearchFilterHandler = (event) => {

        const searchedValue = titleCase(event.target.value);
        const currStateData = AllCountries;
        const filteredCountries = currStateData.filter((eachCountry) => {

            return eachCountry.countryName.includes(searchedValue);
        })
       updateSearchedCountries(filteredCountries);

    }
    const CountryWiseData = SearchedCountries.map((eachCountry) => {
        return (
            <div className={classes.eachOuterCard}>
                <div className={classes.Box}>

                    <div className={classes.eachCard}>
                        <div>
                            <div className={classes.CountryInfo}>
                                <img className={classes.Img} src={eachCountry.flag} alt="countryflag" />
                                <h4>{eachCountry.countryName}</h4>
                            </div>
                            <div className={classes.Statistics}>
                                <p>{eachCountry.TotalAffected} Affected</p>
                                <p> | </p>
                                <p>{eachCountry.TotalRecovered} Recovered</p>
                            </div>

                        </div>
                        <div className = {classes.Arrows}>
                            <img src = {eachCountry.todayCases>0 ? Up : down} />
                        </div>
                    </div>
                </div>

            </div>
        )
    })
    return (<div className={classes.CountryDiv}>
        <div className={classes.Box}>
            <div className={classes.InnerCard}>
                <div className={classes.searchbar}>
                    <Search searchFilterHandler={OnSearchFilterHandler} />
                </div>
                <div className={classes.CountryList}>
                    {CountryWiseData}
                </div>
            </div>


        </div> </div>)

}


export default Country
