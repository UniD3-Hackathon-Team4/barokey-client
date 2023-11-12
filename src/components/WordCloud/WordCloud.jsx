import * as d3 from "d3";
import Cloud from "d3-cloud";
import { useCallback, useRef, useMemo } from "react";
import {useNavigate} from "react-router-dom";

export default function WordCloud({ keywords }) {
	const navigate = useNavigate()
	const gRef = useRef(null);

	const arrKeywords = useMemo(
		() => keywords?.reduce((acc, dta) => [...acc, dta["keyword"]], []),
		[keywords]
	);
	const arrKeywordsSize = useMemo(
		() =>
			keywords?.reduce((acc, dta) => {
				acc[dta["keyword"]] = Math.pow(dta["count"], 3.5);
				return acc;
			}, {}),
		[keywords]
	);
	const countMax = useMemo(
		() => keywords?.reduce((max, dta) => Math.max(dta["count"], max), -Infinity),
		[keywords]
	);
	const size = useCallback(
		(data) => countMax && arrKeywordsSize[data] / countMax,
		[countMax, arrKeywordsSize]
	);

	const WordCloud = (node) => {
		if (!node) return;
		const word = (d) => d; // Given an item of the data array, returns the word
		const marginTop = 0; // top margin, in pixels
		const marginRight = 0; // right margin, in pixels
		const marginBottom = 0; // bottom margin, in pixels
		const marginLeft = 0; // left margin, in pixels
		const width = 640; // outer width, in pixels
		const height = 400; // outer height, in pixels
		const maxWords = 40; // maximum number of words to extract from the text
		const fontFamily = "Spoqa Han Sans"; // font family
		const fontScale = 3.5; // base font size
		const padding = 0; // amount of padding between the words (in pixels)
		const rotate = 0; // a constant or function to rotate the words
		const data = d3
			.rollups(arrKeywords ?? [""], size, (w) => w)
			.sort(([, a], [, b]) => d3.descending(a, b))
			.slice(0, maxWords)
			.map(([key, size]) => ({ text: word(key), size }));

		const svg = d3
			.select(node)
			.attr("viewBox", `0 0 ${width} ${height}`)
			.attr("width", width)
			.attr("height", height)
			.attr("font-family", fontFamily)
			.attr("text-anchor", "middle");

		if (svg.node().hasChildNodes()) {
			svg.selectAll("*").remove();
		}

		const g = svg.append('g').attr("transform", `translate(${marginLeft},${marginTop})`);

		const registeredColor = ["#ff686b", "#f65558", "#ff9130", "#7743db", "#ffc436", "#B15EFF", "#F875AA", "#D2DE32", "#016A70", "#C38154", "#FF6969", "#9EB384", "#9E9FA5", "#00B8A9", "#2192FF", "#39B5E0", "#5272F2", "#FF6D60", "#F7D060"]

		const cloud = Cloud()
			.size([width - marginLeft - marginRight, height - marginTop - marginBottom])
			.words(data)
			.padding(padding)
			.rotate(rotate)
			.fontSize((d) => Math.sqrt(d.size) * fontScale)
			.on("word", ({ size, x, y, rotate, text }) => {
				const t = g.append("text")
				t.attr("font-size", size)
					.style("font-family", fontFamily)
					.style('fill', registeredColor[Math.floor(Math.random() * registeredColor.length)])
					.text(text)
					// .attr('transform-origin', 'center')
					.on('click', () => {
						navigate(`/${text}`)
					})
					.on('mouseover', () => {
						t.style('font-weight', 700)
						// t.transition().attr('transform', 'scale(1.5)')
					})
					.on('mouseout', () => {
						t.style('font-weight', 500)
						// t.transition().attr('transform', 'scale(1.0)')
					})
					.style('cursor', 'pointer')
					.attr("transform", `translate(${x + (Math.random() - 0.5) * 100},${y + (Math.random() - 0.5) * 70}) rotate(${rotate})`)
					.transition()
					.duration(800)
					.ease(d3.easeQuad)
					.attr("transform", `translate(${x},${y}) rotate(${rotate})`)
			});
		cloud.start();
	};

	if (!keywords) return null;

	return (
		<svg width={640} height={400} ref={WordCloud}/>
	);
}
