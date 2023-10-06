var telemetrySchema = [{"$id":"http://api.ekstep.org/telemetry/actor","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/actor/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/actor/type","type":"string"}},"required":["type","id"]},{"$id":"http://api.ekstep.org/telemetry/assess","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["ASSESS"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["item","pass","score","resvalues","duration"],"properties":{"item":{"$ref":"http://api.ekstep.org/telemetry/question"},"index":{"$id":"http://api.ekstep.org/telemetry/edata/index","type":"number"},"pass":{"$id":"http://api.ekstep.org/telemetry/edata/pass","type":"string"},"score":{"$id":"http://api.ekstep.org/telemetry/edata/score","type":"number"},"resvalues":{"$id":"http://api.ekstep.org/telemetry/edata/resvalues","type":"array","items":{"type":"object"}},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/audit","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["AUDIT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"properties":{"props":{"$id":"http://api.ekstep.org/telemetry/edata/props","type":"array","items":{"type":"string"}},"state":{"$id":"http://api.ekstep.org/telemetry/edata/state","type":"string"},"prevstate":{"$id":"http://api.ekstep.org/telemetry/edata/prevstate","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/cdata","type":"array","items":{"type":"object","properties":{"type":{"$id":"http://api.ekstep.org/telemetry/cdata/type","type":"string"},"id":{"$id":"http://api.ekstep.org/telemetry/cdata/id","type":"string"}},"additionalProperties":false,"required":["type","id"]}},{"$id":"http://api.ekstep.org/telemetry/common","type":"object","properties":{"ets":{"$id":"http://api.ekstep.org/telemetry/ets","type":"number","format":"date-time"},"ver":{"$id":"http://api.ekstep.org/telemetry/ver","type":"string","enum":["3.0"]},"mid":{"$id":"http://api.ekstep.org/telemetry/mid","type":"string","minLength":1},"actor":{"$ref":"http://api.ekstep.org/telemetry/actor"},"context":{"$ref":"http://api.ekstep.org/telemetry/context"},"object":{"$ref":"http://api.ekstep.org/telemetry/object"},"tags":{"type":"array","items":{"type":"string"}}}},{"$id":"http://api.ekstep.org/telemetry/context","type":"object","properties":{"channel":{"$id":"http://api.ekstep.org/telemetry/context/channel","type":"string","minLength":1},"pdata":{"$ref":"http://api.ekstep.org/telemetry/pdata"},"env":{"$id":"http://api.ekstep.org/telemetry/context/env","type":"string"},"sid":{"$id":"http://api.ekstep.org/telemetry/context/sid","type":"string"},"did":{"$id":"http://api.ekstep.org/telemetry/context/did","type":"string"},"cdata":{"$ref":"http://api.ekstep.org/telemetry/cdata"}},"required":["channel","env","pdata"]},{"$id":"http://api.ekstep.org/telemetry/dspec","type":"object","properties":{"os":{"$id":"http://api.ekstep.org/telemetry/dspec/os","type":"string"},"make":{"$id":"http://api.ekstep.org/telemetry/dspec/make","type":"string"},"id":{"$id":"http://api.ekstep.org/telemetry/dspec/id","type":"string"},"mem":{"$id":"http://api.ekstep.org/telemetry/dspec/mem","type":"number","minimum":-1},"idisk":{"$id":"http://api.ekstep.org/telemetry/dspec/idisk","type":"number","minimum":-1},"edisk":{"$id":"http://api.ekstep.org/telemetry/dspec/edisk","type":"number","minimum":-1},"scrn":{"$id":"http://api.ekstep.org/telemetry/dspec/scrn","type":"number","minimum":-1},"camera":{"$id":"http://api.ekstep.org/telemetry/dspec/camera","type":"string"},"cpu":{"$id":"http://api.ekstep.org/telemetry/dspec/cpu","type":"string"},"sims":{"$id":"http://api.ekstep.org/telemetry/dspec/sims","type":"number","minimum":-1},"cap":{"$id":"http://api.ekstep.org/telemetry/dspec/cap","type":"array","items":{"type":"string"}}}},{"$id":"http://api.ekstep.org/telemetry/end","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["END"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"mode":{"$id":"http://api.ekstep.org/telemetry/edata/mode","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"summary":{"$id":"http://api.ekstep.org/telemetry/edata/summary","type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/error","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["ERROR"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["err","errtype","stacktrace"],"properties":{"err":{"$id":"http://api.ekstep.org/telemetry/edata/err","type":"string"},"errtype":{"$id":"http://api.ekstep.org/telemetry/edata/errtype","type":"string"},"stacktrace":{"$id":"http://api.ekstep.org/telemetry/edata/stacktrace","type":"string"},"traceid":{"$id":"http://api.ekstep.org/telemetry/edata/traceid","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"object":{"$ref":"http://api.ekstep.org/telemetry/inlineobject"},"plugin":{"$ref":"http://api.ekstep.org/telemetry/plugin"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/exdata","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["EXDATA"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"data":{"$id":"http://api.ekstep.org/telemetry/edata/data","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/feedback","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["FEEDBACK"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"properties":{"rating":{"$id":"http://api.ekstep.org/telemetry/edata/rating","type":"number"},"comments":{"$id":"http://api.ekstep.org/telemetry/edata/comments","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/heartbeat","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["HEARTBEAT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object"}}}]},{"$id":"http://api.ekstep.org/telemetry/impression","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["IMPRESSION"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type","pageid","uri"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"subtype":{"$id":"http://api.ekstep.org/telemetry/edata/subtype","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"uri":{"$id":"http://api.ekstep.org/telemetry/edata/uri","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"visits":{"$id":"http://api.ekstep.org/telemetry/edata/visits","type":"array","items":{"type":"object","properties":{"objid":{"$id":"http://api.ekstep.org/telemetry/edata/visits/objid","type":"string"},"objtype":{"$id":"http://api.ekstep.org/telemetry/edata/visits/objtype","type":"string"},"objver":{"$id":"http://api.ekstep.org/telemetry/edata/visits/objver","type":"string"},"section":{"$id":"http://api.ekstep.org/telemetry/edata/visits/section","type":"string"},"index":{"$id":"http://api.ekstep.org/telemetry/edata/visits/index","type":"number"}},"additionalProperties":false,"required":["objid","objtype"]}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/inlineobject","type":"object","additionalProperties":false,"required":["id","type","ver"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/inlineobject/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/inlineobject/type","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/inlineobject/ver","type":"string"},"subtype":{"$id":"http://api.ekstep.org/telemetry/inlineobject/subtype","type":"string"},"name":{"$id":"http://api.ekstep.org/telemetry/inlineobject/name","type":"string"},"code":{"$id":"http://api.ekstep.org/telemetry/inlineobject/code","type":"string"},"parent":{"$ref":"http://api.ekstep.org/telemetry/parent"}}},{"$id":"http://api.ekstep.org/telemetry/interact","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["INTERACT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type","id"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"subtype":{"$id":"http://api.ekstep.org/telemetry/edata/subtype","type":"string"},"id":{"$id":"http://api.ekstep.org/telemetry/edata/id","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"target":{"$ref":"http://api.ekstep.org/telemetry/target"},"plugin":{"$ref":"http://api.ekstep.org/telemetry/plugin"},"extra":{"$id":"http://api.ekstep.org/telemetry/edata/extra","type":"object"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/interrupt","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["INTERRUPT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/items","type":"array","items":{"type":"object","additionalProperties":false,"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/items/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/items/type","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/items/ver","type":"string"},"params":{"$id":"http://api.ekstep.org/telemetry/items/params","type":"array","items":{"type":"object"}},"origin":{"$id":"http://api.ekstep.org/telemetry/items/origin","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/items/origin/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/items/origin/type","type":"string"}}},"to":{"$id":"http://api.ekstep.org/telemetry/items/to","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/items/to/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/items/to/type","type":"string"}}}}}},{"$id":"http://api.ekstep.org/telemetry/log","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["LOG"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type","level","message"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"level":{"$id":"http://api.ekstep.org/telemetry/edata/level","type":"string"},"message":{"$id":"http://api.ekstep.org/telemetry/edata/message","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"params":{"$id":"http://api.ekstep.org/telemetry/edata/params","type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://mosip.io/telemetry/actor","type":"object","properties":{"id":{"type":"string"},"type":{"type":"string"}}},{"$id":"http://mosip.io/telemetry/appinfo","type":"object","required":["eid","edata"],"allOf":[{"$ref":"http://mosip.io/telemetry/common"},{"properties":{"eid":{"type":"string","enum":["APPINFO"]},"edata":{"type":"object","additionalProperties":false,"properties":{"env":{"type":"string","minLength":1},"injiVersion":{"type":"string","minLength":1},"tuvaliVersion":{"type":"string","minLength":1},"buildNumber":{"type":"string","minLength":1},"preferredLanguage":{"type":"string"},"brandName":{"type":"string","minLength":1},"modelName":{"type":"string","minLength":1},"osName":{"type":"string","minLength":1},"osVersion":{"type":"string","minLength":1},"osApiLevel":{"type":"string","minLength":1},"isHardwareKeystoreSupported":{"type":"boolean","minLength":1},"dateTime":{"type":"number","minLength":1},"zone":{"type":"string","minLength":1},"offset":{"type":"number"}}}}}]},{"$id":"http://mosip.io/telemetry/common","type":"object","required":["ets","sid","mid","appid","actor"],"allOf":[{"$ref":"http://mosip.io/telemetry/actor"},{"properties":{"ets":{"type":"number","format":"date-time"},"mid":{"type":"string","minLength":1},"sid":{"type":"string","minLength":1},"appid":{"type":"string","minLength":1}}}]},{"$id":"http://mosip.io/telemetry/end","type":"object","required":["eid","edata"],"allOf":[{"$ref":"http://mosip.io/telemetry/common"},{"properties":{"eid":{"type":"string","enum":["END"]},"edata":{"type":"object","additionalProperties":true,"required":["type","status","duration"],"properties":{"type":{"type":"string"},"status":{"type":"string"},"duration":{"type":"number"},"additionalParameters":{"type":"object"}}}}}]},{"$id":"http://mosip.io/telemetry/error","type":"object","required":["eid","edata"],"allOf":[{"$ref":"http://mosip.io/telemetry/common"},{"properties":{"eid":{"type":"string","enum":["ERROR"]},"edata":{"type":"object","additionalProperties":false,"required":["errorId","errorMessage","stacktrace"],"properties":{"type":{"type":"string"},"errorId":{"type":"string"},"errorMessage":{"type":"string"},"stacktrace":{"type":"string"},"env":{"type":"string","minLength":1},"injiVersion":{"type":"string","minLength":1},"tuvaliVersion":{"type":"string","minLength":1},"buildNumber":{"type":"string","minLength":1},"preferredLanguage":{"type":"string"},"brandName":{"type":"string","minLength":1},"modelName":{"type":"string","minLength":1},"osName":{"type":"string","minLength":1},"osVersion":{"type":"string","minLength":1},"osApiLevel":{"type":"string","minLength":1},"isHardwareKeystoreSupported":{"type":"string","minLength":1},"dateTime":{"type":"string","minLength":1},"zone":{"type":"string","minLength":1},"offset":{"type":"number"}}}}}]},{"$id":"http://mosip.io/telemetry/impression","type":"object","required":["eid","edata"],"allOf":[{"$ref":"http://mosip.io/telemetry/common"},{"properties":{"eid":{"type":"string","enum":["IMPRESSION"]},"edata":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string"},"additionalParameters":{"type":"object"}},"required":["type"]}}}]},{"$id":"http://mosip.io/telemetry/interact","type":"object","required":["eid","edata"],"allOf":[{"$ref":"http://mosip.io/telemetry/common"},{"properties":{"eid":{"type":"string","enum":["INTERACT"]},"edata":{"type":"object","additionalProperties":true,"required":["type","subtype"],"properties":{"type":{"type":"string"},"subtype":{"type":"string"},"additionalParameters":{"type":"object"}}}}}]},{"$id":"http://mosip.io/telemetry/log","type":"object","required":["eid","edata"],"allOf":[{"$ref":"http://mosip.io/telemetry/common"},{"properties":{"eid":{"type":"string","enum":["LOG"]},"edata":{"type":"object","additionalProperties":true,"required":["type","level","message"],"properties":{"type":{"type":"string"},"level":{"type":"string"},"message":{"type":"string"},"additionalParameters":{"type":"object"}}}}}]},{"$id":"http://mosip.io/telemetry/start","type":"object","required":["eid","edata"],"allOf":[{"$ref":"http://mosip.io/telemetry/common"},{"properties":{"eid":{"type":"string","enum":["START"]},"edata":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string"},"additionalParameters":{"type":"object"}},"required":["type"]}}}]},{"$id":"http://api.ekstep.org/telemetry/object","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/object/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/object/type","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/object/ver","type":"string"},"rollup":{"$ref":"http://api.ekstep.org/telemetry/rollup"}}},{"$id":"http://api.ekstep.org/telemetry/parent","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/parent/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/parent/type","type":"string"}}},{"$id":"http://api.ekstep.org/telemetry/pdata","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/pdata/id","type":"string"},"pid":{"$id":"http://api.ekstep.org/telemetry/pdata/pid","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/pdata/ver","type":"string"}},"required":["id"]},{"$id":"http://api.ekstep.org/telemetry/plugin","type":"object","additionalProperties":false,"required":["id","ver"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/plugin/id","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/plugin/ver","type":"string"},"category":{"$id":"http://api.ekstep.org/telemetry/plugin/category","type":"string"}}},{"$id":"http://api.ekstep.org/telemetry/question","type":"object","additionalProperties":false,"required":["id"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/question/id","type":"string"},"maxscore":{"$id":"http://api.ekstep.org/telemetry/question/maxscore","type":"number"},"exlength":{"$id":"http://api.ekstep.org/telemetry/question/exlength","type":"number"},"params":{"$id":"http://api.ekstep.org/telemetry/question/params","type":"array","items":{"type":"object"}},"uri":{"$id":"http://api.ekstep.org/telemetry/question/uri","type":"string"},"desc":{"$id":"http://api.ekstep.org/telemetry/question/desc","type":"string"},"title":{"$id":"http://api.ekstep.org/telemetry/question/title","type":"string"},"mmc":{"$id":"http://api.ekstep.org/telemetry/question/mmc","type":"array","items":{"type":"string"}},"mc":{"$id":"http://api.ekstep.org/telemetry/question/mc","type":"array","items":{"type":"string"}}}},{"$id":"http://api.ekstep.org/telemetry/response","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["RESPONSE"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["target","type","values"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/type","type":"string"},"target":{"$ref":"http://api.ekstep.org/telemetry/target"},"values":{"type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/rollup","type":"object","properties":{"l1":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l1","type":"string"},"l2":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l2","type":"string"},"l3":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l3","type":"string"},"l4":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l4","type":"string"}}},{"$id":"http://api.ekstep.org/telemetry/search","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["SEARCH"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["query","size","topn"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"query":{"$id":"http://api.ekstep.org/telemetry/edata/query","type":"string"},"filters":{"$id":"http://api.ekstep.org/telemetry/edata/filters","type":"object"},"sort":{"$id":"http://api.ekstep.org/telemetry/edata/sort","type":"object"},"correlationid":{"$id":"http://api.ekstep.org/telemetry/edata/correlationid","type":"string"},"size":{"$id":"http://api.ekstep.org/telemetry/edata/size","type":"number"},"topn":{"$id":"http://api.ekstep.org/telemetry/edata/topn","type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/share","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["SHARE"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["items"],"properties":{"dir":{"$id":"http://api.ekstep.org/telemetry/edata/dir","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"items":{"$ref":"http://api.ekstep.org/telemetry/items"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/start","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["START"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"dspec":{"$ref":"http://api.ekstep.org/telemetry/dspec"},"uaspec":{"$ref":"http://api.ekstep.org/telemetry/uaspec"},"loc":{"$id":"http://api.ekstep.org/telemetry/edata/loc","type":"string"},"mode":{"$id":"http://api.ekstep.org/telemetry/edata/mode","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/target","type":"object","additionalProperties":false,"required":["id","ver","type"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/target/id","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/target/ver","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/target/type","type":"string"},"parent":{"$ref":"http://api.ekstep.org/telemetry/parent"}}},{"$id":"http://api.ekstep.org/telemetry/uaspec","type":"object","properties":{"agent":{"$id":"http://api.ekstep.org/telemetry/uaspec/agent","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/uaspec/ver","type":"string"},"system":{"$id":"http://api.ekstep.org/telemetry/uaspec/system","type":"string"},"platform":{"$id":"http://api.ekstep.org/telemetry/uaspec/platform","type":"string"},"raw":{"$id":"http://api.ekstep.org/telemetry/uaspec/raw","type":"string"}}}]