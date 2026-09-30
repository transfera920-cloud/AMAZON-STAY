import { renderToString } from "react-dom/server";
import "react";
import { jsxDEV } from "react/jsx-dev-runtime";
//#region src/components/Navbar.tsx
var _jsxFileName$11 = "/app/applet/src/components/Navbar.tsx";
var Navbar = () => {
	return /* @__PURE__ */ jsxDEV("header", {
		className: "sticky top-0 z-40 bg-[#0C100E]/95 backdrop-blur-md border-b border-[#1F2B24]",
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
			children: [/* @__PURE__ */ jsxDEV("a", {
				href: "https://amazon-hike.com/",
				className: "text-lg font-bold tracking-tight text-[#E6E4DE] hover:text-[#34D399] transition-colors whitespace-nowrap font-serif",
				children: "亞馬遜國家山岳協會"
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 8,
				columnNumber: 9
			}, void 0), /* @__PURE__ */ jsxDEV("nav", {
				"aria-label": "章節導覽",
				className: "hidden lg:flex items-center gap-4 text-xs font-medium text-[#9CA3AF]",
				children: [
					/* @__PURE__ */ jsxDEV("a", {
						href: "#chapter-1",
						className: "hover:text-[#F3F1EC] transition-colors py-1",
						children: "一、前言"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 17,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("a", {
						href: "#chapter-2",
						className: "hover:text-[#F3F1EC] transition-colors py-1",
						children: "二、角色定義"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 18,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("a", {
						href: "#chapter-3",
						className: "hover:text-[#F3F1EC] transition-colors py-1",
						children: "三、行前階段"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 19,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("a", {
						href: "#chapter-4",
						className: "hover:text-[#F3F1EC] transition-colors py-1",
						children: "四、行進期間"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 20,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("a", {
						href: "#chapter-5",
						className: "hover:text-[#F3F1EC] transition-colors py-1",
						children: "五、事故發生"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 21,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("a", {
						href: "#chapter-6",
						className: "hover:text-[#F3F1EC] transition-colors py-1",
						children: "六、行程結束"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 22,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("a", {
						href: "#chapter-7",
						className: "hover:text-[#F3F1EC] transition-colors py-1",
						children: "七、結語"
					}, void 0, false, {
						fileName: _jsxFileName$11,
						lineNumber: 23,
						columnNumber: 11
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$11,
				lineNumber: 16,
				columnNumber: 9
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$11,
			lineNumber: 6,
			columnNumber: 7
		}, void 0), /* @__PURE__ */ jsxDEV("nav", {
			"aria-label": "行動版章節導覽",
			className: "lg:hidden flex items-center gap-4 px-4 py-2 overflow-x-auto text-xs font-medium text-[#9CA3AF] border-t border-[#1F2B24] no-scrollbar",
			children: [
				/* @__PURE__ */ jsxDEV("a", {
					href: "#chapter-1",
					className: "whitespace-nowrap hover:text-[#F3F1EC]",
					children: "一、前言"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 29,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("a", {
					href: "#chapter-2",
					className: "whitespace-nowrap hover:text-[#F3F1EC]",
					children: "二、角色定義"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 30,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("a", {
					href: "#chapter-3",
					className: "whitespace-nowrap hover:text-[#F3F1EC]",
					children: "三、行前階段"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 31,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("a", {
					href: "#chapter-4",
					className: "whitespace-nowrap hover:text-[#F3F1EC]",
					children: "四、行進期間"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 32,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("a", {
					href: "#chapter-5",
					className: "whitespace-nowrap hover:text-[#F3F1EC]",
					children: "五、事故發生"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 33,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("a", {
					href: "#chapter-6",
					className: "whitespace-nowrap hover:text-[#F3F1EC]",
					children: "六、行程結束"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 34,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("a", {
					href: "#chapter-7",
					className: "whitespace-nowrap hover:text-[#F3F1EC]",
					children: "七、結語"
				}, void 0, false, {
					fileName: _jsxFileName$11,
					lineNumber: 35,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$11,
			lineNumber: 28,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/Hero.tsx
var _jsxFileName$10 = "/app/applet/src/components/Hero.tsx";
var Hero = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		className: "pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#1F2B24] bg-[#0C100E]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("nav", {
					"aria-label": "麵包屑",
					className: "mb-6 text-xs text-[#8E9B93]",
					children: /* @__PURE__ */ jsxDEV("ol", {
						className: "flex flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", {
								href: "https://amazon-hike.com/",
								className: "hover:text-[#E6E4DE] transition-colors",
								children: "首頁"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 12,
								columnNumber: 15
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 11,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("li", {
								"aria-hidden": "true",
								className: "text-[#364A3E]",
								children: "›"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 16,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", {
								href: "https://amazon-hike.com/intro",
								className: "hover:text-[#E6E4DE] transition-colors",
								children: "登山入門教學"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 18,
								columnNumber: 15
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 17,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("li", {
								"aria-hidden": "true",
								className: "text-[#364A3E]",
								children: "›"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 22,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("li", {
								"aria-current": "page",
								className: "text-[#34D399]",
								children: "登山留守人的角色與價值"
							}, void 0, false, {
								fileName: _jsxFileName$10,
								lineNumber: 23,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 10,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 9,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "text-xs sm:text-sm font-medium text-[#34D399] mb-4 tracking-wider",
					children: "登山安全宣導"
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 30,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-3 mb-8",
					children: [/* @__PURE__ */ jsxDEV("h1", {
						className: "text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[#F3F1EC] leading-tight",
						children: "登山留守人的角色與價值"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 36,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ jsxDEV("p", {
						className: "text-xl sm:text-2xl font-serif text-[#E09443] font-medium",
						children: "山下的守護者"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 39,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 35,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "border-l-4 border-[#34D399] pl-5 sm:pl-6 py-2 bg-[#131A17] rounded-r-md border-y border-r border-[#1F2B24]",
					children: /* @__PURE__ */ jsxDEV("p", {
						className: "text-base sm:text-lg text-[#E6E4DE] leading-relaxed font-serif",
						children: "重新定義留守人於登山安全的角色——他不是等待消息的人，而是守護整趟旅程安全的最後一道防線。"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 46,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 45,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/SectionForeword.tsx
var _jsxFileName$9 = "/app/applet/src/components/SectionForeword.tsx";
var SectionForeword = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "chapter-1",
		className: "py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0C100E]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8",
					children: "一、前言：被低估的安全角色"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 9,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-5 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-10",
					children: [/* @__PURE__ */ jsxDEV("p", { children: "在山域活動中，大家往往將注意力集中於領隊能力、隊員體能、裝備準備與路線規劃。然而，有一個角色經常被忽略，卻在危急時刻扮演關鍵作用——留守人員。" }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 15,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ jsxDEV("p", { children: "傳統觀念中，留守人常被認為只需「行前留下姓名與電話、知道隊伍去哪裡、等待隊伍平安返家」。這樣的認知，使得留守制度長期停留在形式層面，未能發揮其應有的安全價值。" }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 18,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 14,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "bg-[#131A17] rounded-lg border border-[#1F2B24] overflow-hidden mb-10",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "px-5 py-3.5 bg-[#18221E] border-b border-[#1F2B24]",
						children: /* @__PURE__ */ jsxDEV("h3", {
							className: "text-sm sm:text-base font-serif font-bold text-[#F3F1EC]",
							children: "傳統認知／現代留守觀念"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 26,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 25,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ jsxDEV("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxDEV("table", {
							className: "w-full text-left text-sm font-serif",
							children: [/* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", {
								className: "bg-[#101614] border-b border-[#1F2B24] text-[#8E9B93]",
								children: [/* @__PURE__ */ jsxDEV("th", {
									className: "p-4 font-medium w-1/2",
									children: "傳統認知"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 35,
									columnNumber: 19
								}, void 0), /* @__PURE__ */ jsxDEV("th", {
									className: "p-4 font-medium w-1/2",
									children: "現代留守觀念"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 36,
									columnNumber: 19
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 34,
								columnNumber: 17
							}, void 0) }, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 33,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ jsxDEV("tbody", {
								className: "divide-y divide-[#1F2B24]",
								children: [
									/* @__PURE__ */ jsxDEV("tr", {
										className: "hover:bg-[#161F1B] transition-colors",
										children: [/* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#E09443]",
											children: "被動等待消息"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 41,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#34D399] font-medium",
											children: "主動監控異常狀況"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 42,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 40,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ jsxDEV("tr", {
										className: "hover:bg-[#161F1B] transition-colors",
										children: [/* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#E09443]",
											children: "留下基本聯絡資料即可"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 45,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#34D399] font-medium",
											children: "掌握完整行程與風險資訊"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 46,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 44,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ jsxDEV("tr", {
										className: "hover:bg-[#161F1B] transition-colors",
										children: [/* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#E09443]",
											children: "事故發生才開始聯絡"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 49,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#34D399] font-medium",
											children: "事前建立應變共識與流程"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 50,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 48,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ jsxDEV("tr", {
										className: "hover:bg-[#161F1B] transition-colors",
										children: [/* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#E09443]",
											children: "單純的通訊中繼站"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 53,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ jsxDEV("td", {
											className: "p-4 text-[#34D399] font-medium",
											children: "山下的資訊整合與資源協調者"
										}, void 0, false, {
											fileName: _jsxFileName$9,
											lineNumber: 54,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$9,
										lineNumber: 52,
										columnNumber: 17
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$9,
								lineNumber: 39,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 32,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 31,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 24,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed",
					children: /* @__PURE__ */ jsxDEV("p", { children: "真正有效的留守制度，不應只是「留下資料」，而應成為登山安全管理系統中的重要環節。留守不是被動等待，而是主動參與。" }, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 63,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 62,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$9,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/SectionRoleDefinition.tsx
var _jsxFileName$8 = "/app/applet/src/components/SectionRoleDefinition.tsx";
var SectionRoleDefinition = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "chapter-2",
		className: "py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0F1412]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [/* @__PURE__ */ jsxDEV("h2", {
				className: "text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8",
				children: "二、重新定義留守人的角色"
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 9,
				columnNumber: 9
			}, void 0), /* @__PURE__ */ jsxDEV("div", {
				className: "space-y-6 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed",
				children: [
					/* @__PURE__ */ jsxDEV("p", { children: "現代登山活動中的留守人，不是遠端領隊，也不是山上決策者。他的定位是：" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 15,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("ul", {
						className: "space-y-3 pl-6 list-disc text-[#F3F1EC]",
						children: [
							/* @__PURE__ */ jsxDEV("li", { children: "山下的資訊管理者" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 20,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("li", { children: "異常發現者" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 21,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("li", { children: "外部資源協調者" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 22,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 19,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("p", { children: "他的核心任務是在隊伍進入山區後，維持一條與外界連結的安全線。這條線平時可能毫不起眼，卻在緊急時刻成為救援行動得以啟動的關鍵。" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 25,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ jsxDEV("p", { children: "留守人不干預山上的決策，但確保山下的支援系統隨時就緒。他的存在，讓登山隊伍在面對未知風險時，始終有一條退路。" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 29,
						columnNumber: 11
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 14,
				columnNumber: 9
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/SectionPreTrip.tsx
var _jsxFileName$7 = "/app/applet/src/components/SectionPreTrip.tsx";
var SectionPreTrip = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "chapter-3",
		className: "py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0C100E]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8",
					children: "三、行前階段：建立完整資訊基礎"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 9,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-8",
					children: "優秀的留守人應在行程開始前積極參與準備工作，而非被動等待隊伍出發後才開始接收資訊。完整的行前準備是留守制度發揮效用的根本。"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 14,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ jsxDEV("div", {
							className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-serif font-bold text-[#34D399] mb-3",
								children: "了解隊伍狀況"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 22,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ jsxDEV("p", {
								className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
								children: "包括隊伍人數、成員能力、領隊與隊員聯絡方式，以及特殊需求或注意事項，確保對每位成員有基本認識。"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 25,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 21,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("div", {
							className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-serif font-bold text-[#34D399] mb-3",
								children: "熟悉行程內容"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 31,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ jsxDEV("p", {
								className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
								children: "掌握進出山路線、預計每日行程、住宿與紮營位置，以及各節點的預計抵達時間，建立時間軸概念。"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 34,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 30,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("div", {
							className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-serif font-bold text-[#34D399] mb-3",
								children: "了解風險因素"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 40,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ jsxDEV("p", {
								className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
								children: "包括高風險路段、天候影響、崩塌、溪谷、雪地等環境因素，以及可能的撤退路線，形成風險地圖。"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 43,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 39,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("div", {
							className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-serif font-bold text-[#34D399] mb-3",
								children: "建立應變共識"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 49,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ jsxDEV("p", {
								className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
								children: "事先約定何時回報安全、失聯多久需要關注、發生事故如何聯繫，讓每個步驟都有明確的觸發條件。"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 52,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 48,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 19,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/SectionOnTrail.tsx
var _jsxFileName$6 = "/app/applet/src/components/SectionOnTrail.tsx";
var SectionOnTrail = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "chapter-4",
		className: "py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0F1412]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8",
					children: "四、行進期間：掌握狀況但不過度干預"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 9,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-5 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-8",
					children: [/* @__PURE__ */ jsxDEV("p", { children: "科技進步後，留守人可利用衛星通訊設備、GPS 定位、衛星訊息及手機通訊協助掌握隊伍狀況。然而，留守的核心並非「監控」，而是確認是否出現異常。" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 15,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ jsxDEV("p", { children: "留守人需要具備辨別「正常延誤」與「真正異常」的判斷能力：" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 18,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 14,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-6 mb-8",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
						children: [/* @__PURE__ */ jsxDEV("h3", {
							className: "text-lg font-serif font-bold text-[#34D399] mb-3",
							children: "正常情況——不需過度反應"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 27,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ jsxDEV("p", {
							className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
							children: "山屋晚到兩小時、因天候延後行程——這些屬於山域活動的正常範圍，不一定代表危險。過度反應反而會消耗救援資源，造成不必要的恐慌。"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 30,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 26,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ jsxDEV("div", {
						className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
						children: [/* @__PURE__ */ jsxDEV("h3", {
							className: "text-lg font-serif font-bold text-[#E09443] mb-3",
							children: "異常情況——需要進一步確認"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 36,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ jsxDEV("p", {
							className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
							children: "超過預定時間仍無消息、位置長時間停留異常、路線明顯偏離預定計畫——此時才需要主動聯繫確認，並依應變共識啟動後續程序。"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 39,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 35,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 24,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed",
					children: /* @__PURE__ */ jsxDEV("p", { children: "留守的藝術，在於知道何時保持靜默，何時採取行動。這需要行前建立的共識作為判斷基準。" }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 48,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 47,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/SectionIncident.tsx
var _jsxFileName$5 = "/app/applet/src/components/SectionIncident.tsx";
var SectionIncident = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "chapter-5",
		className: "py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0C100E]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8",
					children: "五、事故發生時：成為資訊整合中心"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 9,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-8",
					children: "當山區發生意外，留守人往往是最早接觸外界的人。在這個關鍵時刻，他所掌握的資訊品質，直接影響救援行動的效率與成敗。"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 14,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-6 mb-8",
					children: [
						/* @__PURE__ */ jsxDEV("div", {
							className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-serif font-bold text-[#34D399] mb-3",
								children: "提供完整資訊"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 22,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ jsxDEV("p", {
								className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
								children: "包括隊伍名單、路線資料、最後已知位置、通訊狀況、裝備能力，以及入山入園及保險資料。這些資訊是搜救單位制定行動計畫的基礎。"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 25,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 21,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("div", {
							className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-serif font-bold text-[#34D399] mb-3",
								children: "協助啟動救援"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 31,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ jsxDEV("p", {
								className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
								children: "依情況聯繫消防單位、搜救單位、國家公園管理處及相關協助資源，確保救援力量能夠迅速集結。"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 34,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 30,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("div", {
							className: "p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]",
							children: [/* @__PURE__ */ jsxDEV("h3", {
								className: "text-lg font-serif font-bold text-[#34D399] mb-3",
								children: "維持正確資訊傳遞"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 40,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ jsxDEV("p", {
								className: "text-base font-serif text-[#CDC8BD] leading-relaxed",
								children: "避免家屬恐慌、網路謠言及錯誤消息干擾救援行動。留守人是資訊的守門人，確保每一條訊息都經過核實才對外傳遞。"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 43,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 39,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 19,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed",
					children: /* @__PURE__ */ jsxDEV("p", { children: "留守人的價值，不只是「通知」，而是提供搜救所需的關鍵資訊——讓救援行動從一開始就走在正確的方向上。" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 52,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 51,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/SectionPostTrip.tsx
var _jsxFileName$4 = "/app/applet/src/components/SectionPostTrip.tsx";
var SectionPostTrip = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "chapter-6",
		className: "py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0F1412]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8",
					children: "六、行程結束後：建立安全回饋機制"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 9,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("p", {
					className: "text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-6",
					children: "一次登山行程的結束，是下一次更好準備的開始。完成行程後，留守人可協助整個團隊進行系統性的檢討，讓每一次的經驗都轉化為制度的進步。"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 14,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("ul", {
					className: "space-y-3 pl-6 list-disc text-base sm:text-lg font-serif text-[#F3F1EC] mb-8",
					children: [
						/* @__PURE__ */ jsxDEV("li", { children: "通訊流程是否有效" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 20,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("li", { children: "回報方式是否合理" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 21,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("li", { children: "應變流程是否需要改善" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 22,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ jsxDEV("li", { children: "未來行程是否需要調整" }, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 23,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 19,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-4 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed",
					children: /* @__PURE__ */ jsxDEV("p", { children: "這種系統性的回顧，讓登山安全不再依賴個人經驗的積累，而是形成可傳承、可複製的制度性知識。每一次登山經驗，都轉化為下一次更好的安全制度。" }, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 28,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 27,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/SectionConclusion.tsx
var _jsxFileName$3 = "/app/applet/src/components/SectionConclusion.tsx";
var SectionConclusion = () => {
	return /* @__PURE__ */ jsxDEV("section", {
		id: "chapter-7",
		className: "py-12 sm:py-20 bg-[#0C100E]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8",
					children: "七、結語：留守，是登山安全的一部分"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 9,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "space-y-6 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-12",
					children: [/* @__PURE__ */ jsxDEV("p", { children: "真正成熟的登山活動，不只是做好山上的準備，也要建立山下的支援系統。一位優秀的留守人，不一定站在第一線，卻能在關鍵時刻提供最大的支援。" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 15,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ jsxDEV("p", { children: "他不是等待消息的人，而是守護整趟旅程安全的最後一道防線。建立完整的留守制度，讓登山不只是挑戰未知，而是在準備充分下，安全探索山林。" }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 18,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 14,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("div", {
					className: "p-8 sm:p-12 rounded-xl bg-[#131A17] border border-[#1F2B24] text-center space-y-6",
					children: [/* @__PURE__ */ jsxDEV("div", {
						className: "space-y-4 font-serif",
						children: [
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-[#F3F1EC] leading-relaxed",
								children: [
									"山上的人負責前進，",
									/* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 27,
										columnNumber: 24
									}, void 0),
									"山下的人負責守護。"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 26,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("div", { className: "w-10 h-0.5 bg-[#E09443] mx-auto my-4" }, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 31,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ jsxDEV("p", {
								className: "text-base sm:text-lg text-[#CDC8BD] leading-relaxed font-normal",
								children: [
									"建立完整的留守制度，",
									/* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 34,
										columnNumber: 25
									}, void 0),
									"讓登山不只是挑戰未知，",
									/* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
										fileName: _jsxFileName$3,
										lineNumber: 35,
										columnNumber: 26
									}, void 0),
									"而是在準備充分下，安全探索山林。"
								]
							}, void 0, true, {
								fileName: _jsxFileName$3,
								lineNumber: 33,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 25,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ jsxDEV("div", {
						className: "pt-6 border-t border-[#1F2B24] text-sm text-[#8E9B93] font-serif",
						children: "— 亞馬遜國家山岳協會 登山安全宣導"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 40,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 24,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/Footer.tsx
var _jsxFileName$2 = "/app/applet/src/components/Footer.tsx";
var Footer = () => {
	return /* @__PURE__ */ jsxDEV("footer", {
		className: "bg-[#090D0B] text-[#8E9B93] py-10 text-center text-sm font-sans border-t border-[#1F2B24]",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8",
			children: [
				/* @__PURE__ */ jsxDEV("a", {
					href: "https://amazon-hike.com/",
					className: "text-[#E6E4DE] hover:text-[#34D399] transition-colors font-serif font-medium text-sm sm:text-base",
					children: "亞馬遜國家山岳協會"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 7,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("span", {
					"aria-hidden": "true",
					className: "hidden sm:inline text-[#23352B]",
					children: "·"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 13,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ jsxDEV("a", {
					href: "https://amazon-hike.com/intro",
					className: "text-[#9CA3AF] hover:text-[#E6E4DE] transition-colors text-sm",
					children: "回到登山入門教學"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 6,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 5,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/App.tsx
/**
* @license
* SPDX-License-Identifier: Apache-2.0
*/
var _jsxFileName$1 = "/app/applet/src/App.tsx";
function App() {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "min-h-screen bg-[#0C100E] text-[#E6E4DE] selection:bg-[#1E3B2E] selection:text-[#A7F3D0]",
		children: [
			/* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("main", { children: [
				/* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(SectionForeword, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(SectionRoleDefinition, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(SectionPreTrip, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(SectionOnTrail, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 28,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(SectionIncident, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(SectionPostTrip, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV(SectionConclusion, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 31,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
//#endregion
//#region src/entry-server.tsx
var _jsxFileName = "/app/applet/src/entry-server.tsx";
function render() {
	return renderToString(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 25
	}, this));
}
//#endregion
export { render };
