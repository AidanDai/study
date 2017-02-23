SELECT COUNT(*), 
	group_concat(distinct channel ORDER BY channel) channels, 
	group_concat(distinct business_type ORDER BY business_type) business_types 
FROM g_service_worksheet 
WHERE (business_type = 1
	OR business_type = 2 
	OR business_type = 3
	OR business_type = 4
	OR business_type = 7
)
	AND (channel = 1
		OR channel = 2
		OR channel = 3
	)
	AND (
		( process_id = 0 ) 
		OR ( deal_status = 3 AND occupy_user > 0 AND occupy_user < 100000 )
	)
	AND create_time BETWEEN '2016-09-05' AND '2016-09-12' 
GROUP BY channel, business_type