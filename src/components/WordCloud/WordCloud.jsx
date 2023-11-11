import * as d3 from 'd3';
import Cloud from 'd3-cloud';
import {useCallback, useRef, useMemo} from "react";

export default function WordCloud({keywords}) {
    const gRef = useRef(null);

    const arrKeywords = useMemo(()=>keywords?.reduce((acc, dta)=>[...acc,dta["keyword"]],[]), [keywords])
    const arrKeywordsSize = useMemo(()=>keywords?.reduce((acc, dta)=>{acc[dta["keyword"]] = dta["count"]; return acc;},{}), [keywords])
    const countMax = useMemo(()=>keywords?.reduce((max, dta) => Math.max(dta["count"], max), -Infinity), [keywords]);
    const size = useCallback((data)=>countMax && (arrKeywordsSize[data]/countMax),[countMax, arrKeywordsSize])

    const WordCloud = (node) => {
        if (!node) return;
        const word = d => d; // Given an item of the data array, returns the word
        const marginTop = 0; // top margin, in pixels
        const marginRight = 0; // right margin, in pixels
        const marginBottom = 0; // bottom margin, in pixels
        const marginLeft = 0; // left margin, in pixels
        const width = 640; // outer width, in pixels
        const height = 400; // outer height, in pixels
        const maxWords = 40; // maximum number of words to extract from the text
        const fontFamily = "Spoqa Han Sans"; // font family
        const fontScale = 30; // base font size
        const padding = 0; // amount of padding between the words (in pixels)
        const rotate = 0; // a constant or function to rotate the words
        const data = d3.rollups(arrKeywords ?? [""], size, w => w)
            .sort(([, a], [, b]) => d3.descending(a, b))
            .slice(0, maxWords)
            .map(([key, size]) => ({text: word(key), size}));

        const svg = d3.select(node)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width",width)
            .attr("height",height)
            .attr("font-family", fontFamily)
            .attr("text-anchor", "middle")

        const g = d3.select(gRef.current).attr("transform", `translate(${marginLeft},${marginTop})`);

        const cloud = Cloud()
            .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
            .words(data)
            .padding(padding)
            .rotate(rotate)
            .fontSize(d => Math.sqrt(d.size) * fontScale)
            .on("word", ({size, x, y, rotate, text}) => {
                g.append("text")
                    .attr("font-size", size)
                    .attr("font-family", fontFamily)
                    .style("font-family", fontFamily)
                    .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
                    .text(text)
                    .style("fill",function() {
                        return "hsl(" + Math.random() * 360 + ",100%,30%)";
                    });
            });
        cloud.start();
    }

    if (!keywords) return null;

    return <svg
        width={640}
        height={400}
        ref={WordCloud}>
        <g ref={gRef}/>
    </svg>
}