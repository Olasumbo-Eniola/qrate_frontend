import React from "react";

const Details = ({ onClick }) => {
	return (
		<div className="details my-5 row justify-content-between">
			<div className="artPic col-md-6">
				<img className="frame" src="/images/dashboard/gallery/frame.png" alt="Frame" />
				<img className="art-in-frame" src="/images/dashboard/gallery/01.png" alt="Art" />
			</div>
			<div className="col-md-6 d-flex flex-column justify-content-center">
				<div className="d-flex justify-content-between flex-wrap">
					<button className="btn bg-green text-light px-4 py-2 my-2">Save</button>
					<button className="btn bg-green text-light px-4 py-2 ml-2 my-2" onClick={onClick}>
						Purchase
					</button>
					<button className="btn bg-black text-light text-center px-4 py-2 ml-2 my-2 watch">
						<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M6.627 4.10922C5.46852 4.10922 4.52939 5.04836 4.52939 6.20683V34.009C4.52939 35.1675 5.46852 36.1066 6.627 36.1066H34.4292C35.5877 36.1066 36.5268 35.1675 36.5268 34.009V6.20683C36.5268 5.04836 35.5877 4.10922 34.4292 4.10922H6.627ZM0.974121 6.20683C0.974121 3.08483 3.505 0.553955 6.627 0.553955H34.4292C37.5512 0.553955 40.0821 3.08483 40.0821 6.20683V34.009C40.0821 37.131 37.5512 39.6619 34.4292 39.6619H6.627C3.505 39.6619 0.974121 37.131 0.974121 34.009V6.20683Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M11.6399 0.553955C12.6217 0.553955 13.4176 1.34983 13.4176 2.33159V37.8843C13.4176 38.866 12.6217 39.6619 11.6399 39.6619C10.6582 39.6619 9.86229 38.866 9.86229 37.8843V2.33159C9.86229 1.34983 10.6582 0.553955 11.6399 0.553955Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M29.4163 0.553955C30.398 0.553955 31.1939 1.34983 31.1939 2.33159V37.8843C31.1939 38.866 30.398 39.6619 29.4163 39.6619C28.4345 39.6619 27.6386 38.866 27.6386 37.8843V2.33159C27.6386 1.34983 28.4345 0.553955 29.4163 0.553955Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.974121 20.1079C0.974121 19.1262 1.77 18.3303 2.75176 18.3303H38.3045C39.2862 18.3303 40.0821 19.1262 40.0821 20.1079C40.0821 21.0897 39.2862 21.8856 38.3045 21.8856H2.75176C1.77 21.8856 0.974121 21.0897 0.974121 20.1079Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.974121 11.2198C0.974121 10.238 1.77 9.44213 2.75176 9.44213H11.6399C12.6217 9.44213 13.4176 10.238 13.4176 11.2198C13.4176 12.2015 12.6217 12.9974 11.6399 12.9974H2.75176C1.77 12.9974 0.974121 12.2015 0.974121 11.2198Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.974121 28.9961C0.974121 28.0144 1.77 27.2185 2.75176 27.2185H11.6399C12.6217 27.2185 13.4176 28.0144 13.4176 28.9961C13.4176 29.9779 12.6217 30.7737 11.6399 30.7737H2.75176C1.77 30.7737 0.974121 29.9779 0.974121 28.9961Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M27.6386 28.9961C27.6386 28.0144 28.4345 27.2185 29.4163 27.2185H38.3045C39.2862 27.2185 40.0821 28.0144 40.0821 28.9961C40.0821 29.9779 39.2862 30.7737 38.3045 30.7737H29.4163C28.4345 30.7737 27.6386 29.9779 27.6386 28.9961Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M27.6386 11.2198C27.6386 10.238 28.4345 9.44213 29.4163 9.44213H38.3045C39.2862 9.44213 40.0821 10.238 40.0821 11.2198C40.0821 12.2015 39.2862 12.9974 38.3045 12.9974H29.4163C28.4345 12.9974 27.6386 12.2015 27.6386 11.2198Z"
								fill="white"
							/>
						</svg>
						<span className="ml-2">Watch Process</span>
					</button>
				</div>
				<div className="bg-white d-flex justify-content-between align-items-center py-3 px-4 shadow action my-3">
					<div>
						<i className="fa fa-heart text-danger"></i>
						<span className="text-danger">30</span>
					</div>
					<svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1.28911 8.99595C0.732078 8.43891 0.732078 7.53578 1.28911 6.97874L6.99464 1.27322C7.55167 0.716181 8.45481 0.716181 9.01184 1.27322L14.7174 6.97874C15.2744 7.53578 15.2744 8.43891 14.7174 8.99595C14.1603 9.55298 13.2572 9.55298 12.7002 8.99595L8.00324 4.29903L3.30632 8.99595C2.74928 9.55298 1.84615 9.55298 1.28911 8.99595Z"
							fill="#6C6B6B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.42962 22.2512C9.42962 23.3861 9.88046 24.4745 10.683 25.277C11.4854 26.0795 12.5739 26.5303 13.7088 26.5303L16.5615 26.5303C17.3493 26.5303 17.9879 27.1689 17.9879 27.9567C17.9879 28.7444 17.3493 29.3831 16.5615 29.3831L13.7088 29.3831C11.8173 29.3831 10.0032 28.6317 8.66575 27.2942C7.32825 25.9567 6.57686 24.1427 6.57686 22.2512L6.57686 2.28182C6.57686 1.49405 7.21547 0.855441 8.00324 0.855441C8.79101 0.855441 9.42962 1.49405 9.42962 2.28182L9.42962 22.2512Z"
							fill="#6C6B6B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M21.2584 21.2425C21.8155 20.6855 22.7186 20.6855 23.2757 21.2425L27.9726 25.9395L32.6695 21.2425C33.2265 20.6855 34.1297 20.6855 34.6867 21.2425C35.2437 21.7996 35.2437 22.7027 34.6867 23.2598L28.9812 28.9653C28.4241 29.5223 27.521 29.5223 26.964 28.9653L21.2584 23.2598C20.7014 22.7027 20.7014 21.7996 21.2584 21.2425Z"
							fill="#6C6B6B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M17.9879 2.28182C17.9879 1.49405 18.6265 0.855441 19.4143 0.855441L22.267 0.855441C24.1585 0.855441 25.9726 1.60684 27.3101 2.94433C28.6476 4.28182 29.3989 6.09584 29.3989 7.98734L29.399 27.9567C29.399 28.7444 28.7603 29.3831 27.9726 29.3831C27.1848 29.3831 26.5462 28.7444 26.5462 27.9567L26.5462 7.98734C26.5462 6.85245 26.0954 5.76403 25.2929 4.96154C24.4904 4.15904 23.4019 3.7082 22.267 3.7082L19.4143 3.7082C18.6265 3.7082 17.9879 3.06959 17.9879 2.28182Z"
							fill="#6C6B6B"
						/>
					</svg>
					<svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M23.399 3.28172C21.8235 3.28172 20.5462 4.55894 20.5462 6.13448C20.5462 7.71001 21.8235 8.98724 23.399 8.98724C24.9745 8.98724 26.2518 7.71001 26.2518 6.13448C26.2518 4.55894 24.9745 3.28172 23.399 3.28172ZM17.6935 6.13448C17.6935 2.9834 20.2479 0.428955 23.399 0.428955C26.5501 0.428955 29.1045 2.9834 29.1045 6.13448C29.1045 9.28555 26.5501 11.84 23.399 11.84C20.2479 11.84 17.6935 9.28555 17.6935 6.13448Z"
							fill="#6C6B6B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M6.28243 13.2664C4.70689 13.2664 3.42967 14.5436 3.42967 16.1191C3.42967 17.6947 4.70689 18.9719 6.28243 18.9719C7.85796 18.9719 9.13519 17.6947 9.13519 16.1191C9.13519 14.5436 7.85796 13.2664 6.28243 13.2664ZM0.576904 16.1191C0.576904 12.9681 3.13135 10.4136 6.28243 10.4136C9.4335 10.4136 11.988 12.9681 11.988 16.1191C11.988 19.2702 9.4335 21.8247 6.28243 21.8247C3.13135 21.8247 0.576904 19.2702 0.576904 16.1191Z"
							fill="#6C6B6B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M23.399 23.251C21.8235 23.251 20.5462 24.5283 20.5462 26.1038C20.5462 27.6793 21.8235 28.9566 23.399 28.9566C24.9745 28.9566 26.2518 27.6793 26.2518 26.1038C26.2518 24.5283 24.9745 23.251 23.399 23.251ZM17.6935 26.1038C17.6935 22.9527 20.2479 20.3983 23.399 20.3983C26.5501 20.3983 29.1045 22.9527 29.1045 26.1038C29.1045 29.2549 26.5501 31.8093 23.399 31.8093C20.2479 31.8093 17.6935 29.2549 17.6935 26.1038Z"
							fill="#6C6B6B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.3242 18.0598C9.72083 17.3791 10.5941 17.1489 11.2748 17.5455L19.833 22.5379C20.5137 22.9345 20.7439 23.8078 20.3473 24.4884C19.9507 25.169 19.0774 25.3993 18.3967 25.0027L9.83846 20.0103C9.15782 19.6137 8.92758 18.7404 9.3242 18.0598Z"
							fill="#6C6B6B"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M20.3461 7.74955C20.7431 8.42993 20.5134 9.30337 19.833 9.70043L11.2863 15.0171C10.6059 15.4141 9.73243 15.1845 9.33537 14.5041C8.93831 13.8237 9.16799 12.9502 9.84838 12.5532L18.3952 7.23654C19.0756 6.83948 19.949 7.06916 20.3461 7.74955Z"
							fill="#6C6B6B"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Details;
