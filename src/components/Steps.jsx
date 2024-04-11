import * as React from "react";

export default function Steps() {
    const Data = [
        {
            step: '01',
            title: 'The customer scans the QR code provided on the flyer',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4360469af25cc1a483389a656ec2a72029f601da26e248ecea170a349f5affd8?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '02',
            title: 'Upon scanning, the customer is redirected to the game',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81ee92b9440d122e4342ffe135bf1c4118958e990f269250cfee1da30f9a544d?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '03',
            title: 'To access the game, customers are required to leave a Google review and subscribe to our social media platforms',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b692db1780058471fe896630774d1f043a31b6bf25bc9e9e5ee784af0cc95fe?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '04',
            title: 'Participants will spin the fortune wheel to claim their prize (limited to one spin per participant)',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/611c1182dfe953863ac9b2f34c9f0d032ec41a8dd23f1678c31cdf9b1dd720f6?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
        {
            step: '05',
            title: 'Upon winning, the customer will be sent an email notification',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329*e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4665cb900bafcab922942417c8b5c2c22ca014539b05663165350b63b9d03d37?apiKey=cf358c329e0d49a792d02d32277323ef&'
        },
    ]
    return (
        <div>
            <div className="justify-center px-5 w-full max-md:max-w-full">
                <div className="flex gap-10 flex-wrap max-md:flex-col justify-center items-center md:items-start max-md:gap-0 max-w-[1100px] mx-auto">
                    {
                        Data.map((Item) => (
                            <div className="flex flex-col flex-wrap max-w-[270px] md:mx-7 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col pb-5 text-2xl text-center text-black max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet={Item.image}
                                        className="self-center max-w-full aspect-square w-[150px]"
                                    />
                                    <div className="flex flex-col mt-8">
                                        <div className="font-semibold leading-2 mt-1">Step {Item.step} </div>
                                        <div className="font-normal leading-9 mt-2 w-[100%]">
                                            {Item.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

