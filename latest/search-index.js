var searchIndex = {};
searchIndex["accumulator"] = {"doc":"# Accumulator","items":[[3,"Accumulator","accumulator","Implementation of [Accumulator](index.html#accumulator).",null,null],[11,"with_capacity","","Constructor for capacity based `Accumulator`.",0,{"inputs":[{"name":"usize"},{"name":"usize"}],"output":{"name":"accumulator"}}],[11,"with_duration","","Constructor for time based `Accumulator`.",0,{"inputs":[{"name":"usize"},{"name":"duration"}],"output":{"name":"accumulator"}}],[11,"contains_key","","Returns whether `key` exists in the accumulator or not.",0,{"inputs":[{"name":"accumulator"},{"name":"key"}],"output":{"name":"bool"}}],[11,"is_quorum_reached","","Returns whether `key` exists and has accumulated `quorum` or more corresponding values.",0,{"inputs":[{"name":"accumulator"},{"name":"key"}],"output":{"name":"bool"}}],[11,"add","","Adds a key-value pair.",0,{"inputs":[{"name":"accumulator"},{"name":"key"},{"name":"value"}],"output":{"name":"option"}}],[11,"get","","Retrieves a clone of the values accumulated under `key`, or `None`  if `key` doesn&#39;t exist.",0,{"inputs":[{"name":"accumulator"},{"name":"key"}],"output":{"name":"option"}}],[11,"delete","","Removes `key` and all corresponding accumulated values.",0,{"inputs":[{"name":"accumulator"},{"name":"key"}],"output":null}],[11,"cache_size","","Returns the size of the accumulator, i.e. the number of keys held.",0,{"inputs":[{"name":"accumulator"}],"output":{"name":"usize"}}],[11,"set_quorum_size","","Sets a new value for `quorum`.",0,{"inputs":[{"name":"accumulator"},{"name":"usize"}],"output":null}]],"paths":[[3,"Accumulator"]]};
searchIndex["log"] = {"doc":"A lightweight logging facade.","items":[[3,"LogRecord","log","The &quot;payload&quot; of a log message.",null,null],[3,"LogMetadata","","Metadata about a log message.",null,null],[3,"LogLocation","","The location of a log message.",null,null],[3,"MaxLogLevelFilter","","A token providing read and write access to the global maximum log level\nfilter.",null,null],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has already been called.",null,null],[3,"ShutdownLoggerError","","The type returned by `shutdown_logger_raw` if `shutdown_logger_raw` has\nalready been called or if `set_logger_raw` has not been called yet.",null,null],[4,"LogLevel","","An enum representing the available verbosity levels of the logging framework",null,null],[13,"Error","","The &quot;error&quot; level.",0,null],[13,"Warn","","The &quot;warn&quot; level.",0,null],[13,"Info","","The &quot;info&quot; level.",0,null],[13,"Debug","","The &quot;debug&quot; level.",0,null],[13,"Trace","","The &quot;trace&quot; level.",0,null],[4,"LogLevelFilter","","An enum representing the available verbosity level filters of the logging\nframework.",null,null],[13,"Off","","A level lower than all log levels.",1,null],[13,"Error","","Corresponds to the `Error` log level.",1,null],[13,"Warn","","Corresponds to the `Warn` log level.",1,null],[13,"Info","","Corresponds to the `Info` log level.",1,null],[13,"Debug","","Corresponds to the `Debug` log level.",1,null],[13,"Trace","","Corresponds to the `Trace` log level.",1,null],[5,"max_log_level","","Returns the current maximum log level.",null,{"inputs":[],"output":{"name":"loglevelfilter"}}],[5,"set_logger","","Sets the global logger.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"set_logger_raw","","Sets the global logger from a raw pointer.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"shutdown_logger","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[5,"shutdown_logger_raw","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[8,"Log","","A trait encapsulating the operations required of a logger",null,null],[10,"enabled","","Determines if a log message with the specified metadata would be\nlogged.",2,{"inputs":[{"name":"log"},{"name":"logmetadata"}],"output":{"name":"bool"}}],[10,"log","","Logs the `LogRecord`.",2,{"inputs":[{"name":"log"},{"name":"logrecord"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"loglevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevel"}}],[11,"eq","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevelfilter"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"option"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"ordering"}}],[11,"from_str","","",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"loglevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level.",0,{"inputs":[],"output":{"name":"loglevel"}}],[11,"to_log_level_filter","","Converts the `LogLevel` to the equivalent `LogLevelFilter`.",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevelfilter"}}],[11,"fmt","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"eq","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevel"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevel"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"ordering"}}],[11,"from_str","","",1,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level filter.",1,{"inputs":[],"output":{"name":"loglevelfilter"}}],[11,"to_log_level","","Converts `self` to the equivalent `LogLevel`.",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"args","","The message body.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"arguments"}}],[11,"metadata","","Metadata about the log directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"logmetadata"}}],[11,"location","","The location of the log directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"loglocation"}}],[11,"level","","The verbosity level of the message.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"loglevel"}}],[11,"target","","The name of the target of the directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"str"}}],[11,"level","","The verbosity level of the message.",4,{"inputs":[{"name":"logmetadata"}],"output":{"name":"loglevel"}}],[11,"target","","The name of the target of the directive.",4,{"inputs":[{"name":"logmetadata"}],"output":{"name":"str"}}],[11,"fmt","","",5,{"inputs":[{"name":"loglocation"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"loglocation"}}],[11,"module_path","","The module path of the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"str"}}],[11,"file","","The source file containing the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"str"}}],[11,"line","","The line containing the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"u32"}}],[11,"fmt","","",6,{"inputs":[{"name":"maxloglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get","","Gets the current maximum log level filter.",6,{"inputs":[{"name":"maxloglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"set","","Sets the maximum log level.",6,{"inputs":[{"name":"maxloglevelfilter"},{"name":"loglevelfilter"}],"output":null}],[11,"fmt","","",7,{"inputs":[{"name":"setloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"setloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",7,{"inputs":[{"name":"setloggererror"}],"output":{"name":"str"}}],[11,"fmt","","",8,{"inputs":[{"name":"shutdownloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"shutdownloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",8,{"inputs":[{"name":"shutdownloggererror"}],"output":{"name":"str"}}],[14,"log!","","The standard logging macro.",null,null],[14,"error!","","Logs a message at the error level.",null,null],[14,"warn!","","Logs a message at the warn level.",null,null],[14,"info!","","Logs a message at the info level.",null,null],[14,"debug!","","Logs a message at the debug level.",null,null],[14,"trace!","","Logs a message at the trace level.",null,null],[14,"log_enabled!","","Determines if a message logged at the specified level in that module will\nbe logged.",null,null]],"paths":[[4,"LogLevel"],[4,"LogLevelFilter"],[8,"Log"],[3,"LogRecord"],[3,"LogMetadata"],[3,"LogLocation"],[3,"MaxLogLevelFilter"],[3,"SetLoggerError"],[3,"ShutdownLoggerError"]]};
searchIndex["lru_time_cache"] = {"doc":"# Least Recently Used (LRU) Cache","items":[[3,"VacantEntry","lru_time_cache","A vacant Entry.",null,null],[3,"OccupiedEntry","","An occupied Entry.",null,null],[3,"LruCache","","Implementation of [LRU cache](index.html#least-recently-used-lru-cache).",null,null],[4,"Entry","","A view into a single entry in an LRU cache, which may either be vacant or occupied.",null,null],[13,"Vacant","","A vacant Entry",0,null],[13,"Occupied","","An occupied Entry",0,null],[11,"with_capacity","","Constructor for capacity based `LruCache`.",1,{"inputs":[{"name":"usize"}],"output":{"name":"lrucache"}}],[11,"with_expiry_duration","","Constructor for time based `LruCache`.",1,{"inputs":[{"name":"duration"}],"output":{"name":"lrucache"}}],[11,"with_expiry_duration_and_capacity","","Constructor for dual-feature capacity and time based `LruCache`.",1,{"inputs":[{"name":"duration"},{"name":"usize"}],"output":{"name":"lrucache"}}],[11,"insert","","Inserts a key-value pair into the cache.",1,{"inputs":[{"name":"lrucache"},{"name":"key"},{"name":"value"}],"output":{"name":"option"}}],[11,"remove","","Removes a key-value pair from the cache.",1,{"inputs":[{"name":"lrucache"},{"name":"key"}],"output":{"name":"option"}}],[11,"get","","Retrieves a reference to the value stored under `key`, or `None` if the key doesn&#39;t exist.\nAlso removes expired elements and updates the time.",1,{"inputs":[{"name":"lrucache"},{"name":"key"}],"output":{"name":"option"}}],[11,"get_mut","","Retrieves a mutable reference to the value stored under `key`, or `None` if the key doesn&#39;t\nexist.  Also removes expired elements and updates the time.",1,{"inputs":[{"name":"lrucache"},{"name":"key"}],"output":{"name":"option"}}],[11,"contains_key","","Returns whether `key` exists in the cache or not.",1,{"inputs":[{"name":"lrucache"},{"name":"key"}],"output":{"name":"bool"}}],[11,"len","","Returns the size of the cache, i.e. the number of cached non-expired key-value pairs.",1,{"inputs":[{"name":"lrucache"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns `true` if there are no non-expired entries in the cache.",1,{"inputs":[{"name":"lrucache"}],"output":{"name":"bool"}}],[11,"entry","","Gets the given key&#39;s corresponding entry in the map for in-place manipulation.",1,{"inputs":[{"name":"lrucache"},{"name":"key"}],"output":{"name":"entry"}}],[11,"retrieve_all","","Returns a clone of all elements as an unordered vector of key-value tuples.  Also removes\nexpired elements and updates the time.",1,{"inputs":[{"name":"lrucache"}],"output":{"name":"vec"}}],[11,"retrieve_all_ordered","","Returns a clone of all elements as a vector of key-value tuples ordered by most to least\nrecently updated.  Also removes expired elements and updates the time.",1,{"inputs":[{"name":"lrucache"}],"output":{"name":"vec"}}],[11,"clone","","",1,{"inputs":[{"name":"lrucache"}],"output":{"name":"lrucache"}}],[11,"insert","","Inserts a value",2,{"inputs":[{"name":"vacantentry"},{"name":"value"}],"output":{"name":"value"}}],[11,"into_mut","","Converts the entry into a mutable reference to its value.",3,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"value"}}],[11,"or_insert","","Ensures a value is in the entry by inserting the default if empty, and returns\na mutable reference to the value in the entry.",0,{"inputs":[{"name":"entry"},{"name":"value"}],"output":{"name":"value"}}],[11,"or_insert_with","","Ensures a value is in the entry by inserting the result of the default function if empty,\nand returns a mutable reference to the value in the entry.",0,{"inputs":[{"name":"entry"},{"name":"f"}],"output":{"name":"value"}}]],"paths":[[4,"Entry"],[3,"LruCache"],[3,"VacantEntry"],[3,"OccupiedEntry"]]};
initSearch(searchIndex);
