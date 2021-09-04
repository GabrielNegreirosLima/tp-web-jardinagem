FROM mysql:8

COPY ./migration.sql /docker-entrypoint-initdb.d/migration.sql

EXPOSE 3306
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"] 