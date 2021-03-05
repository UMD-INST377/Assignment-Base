//libraries imported to make system work -- taken from lecture: fetch request and async data handling

import path from 'path';
import express from 'express';
import dontenv from 'dotenv';
import reload from 'livereload';
import connectReload from 'connect-livereload';

app.rout('/api')    
 .get(async(req,res,next)=>{
    console.log('GET request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')  
    const json = await data.json();
    console.log('data from fetch', jason[0])
    res.json(json);
})

