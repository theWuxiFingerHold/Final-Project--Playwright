interface LoginRes {
    "data": {
        "userLogin": number
    }
}

interface UserInfoRes {
    "currentUserInfo": {
        "customerId": 1119765,
        "social_login_session": {
            "date_of_birth": null,
            "email": null,
            "first_name": null,
            "is_proxy_email": null,
            "last_name": null,
            "provider": null,
            "redirect_url": null
        },
        "is_logged_in": 1,
        "scBalance": 0,
        "customerGroupId": 1,
        "firstName": "test",
        "firstNameOriginal": "test",
        "lastName": "test",
        "gender": "m",
        "birthdate": "19951026",
        "email": "737aa05c76bb29cfdcbf947e633b5c2d8b7b6ed2d1301740d62e7acbb2a6fc1a",
        "city": "",
        "zip": "",
        "country": "il",
        "isDCMember": 0,
        "dcId": "0",
        "dcBalance": 0,
        "dc_membership_points_percent": 10,
        "dc_vip_checked": false,
        "dc_vip_show": false,
        "telephone": "9725550716",
        "international_phone": "9725550716",
        "isMultipassUser": false,
        "isMultipassLinkVisible": true,
        "cart_items_count": 1,
        "customerEmail": "josaca4731@dpsols.com",
        "first_time_user": 2,
        "pastPurchase": 2
    }
}
export { LoginRes }