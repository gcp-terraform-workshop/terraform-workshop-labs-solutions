# Packer Demo

https://www.packer.io/intro/

https://martinfowler.com/bliki/ImmutableServer.html

```
packer build -var region="us-west1" -var source_image_family="ubuntu-1604-lts" -var machine_type="n1-standard-1" -var zone="us-west1-b" -var project_id="booth-test-55" ./templates/web_server.json
```

